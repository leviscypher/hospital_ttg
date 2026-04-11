# HospitalTTG - Hướng dẫn kiến trúc & phát triển

## Tổng quan

Hệ thống quản lý bệnh viện HospitalTTG, xây dựng trên .NET 10.0 với kiến trúc **Modular Monolith** và pattern **Service/Repository**. Không sử dụng CQRS/MediatR.

**Database:** SQL Server  
**Auth:** JWT Bearer + BCrypt  
**ORM:** Entity Framework Core

---

## 1. Cấu trúc Solution

```
HospitalTTG/
├── Directory.Build.props              # Shared build properties (TFM, nullable)
├── Directory.Packages.props           # Central Package Management (NuGet versions)
├── HospitalTTG.slnx                  # Solution file (.NET modern format)
│
├── Shared.Abstractions/              # [Layer 1] Interfaces & base classes
├── Shared.Infrastructure/            # [Layer 2] Implementations cross-cutting
├── Contracts.Auth/                   # [Layer 3] Public API surface - Auth module
├── Modules.Auth/                     # [Layer 4] Business logic - Auth module
└── WebAPI/                           # [Layer 5] Host - điểm khởi chạy
```

### Solution Folders trong .slnx

| Solution Folder | Chứa | Vai trò |
|-----------------|------|---------|
| `/Shared/` | Shared.Abstractions, Shared.Infrastructure | Code dùng chung toàn solution |
| `/Contracts/` | Contracts.Auth, Contracts.{Module}... | Hợp đồng giao tiếp giữa modules |
| `/Modules/` | Modules.Auth, Modules.{Module}... | Business logic từng module |
| `/Host/` | WebAPI | Ứng dụng ASP.NET Core chạy chính |

---

## 2. Quan hệ giữa các Project

### Sơ đồ dependency

```
WebAPI (Host)
  ├──→ Modules.Auth
  │      ├──→ Contracts.Auth
  │      ├──→ Shared.Abstractions
  │      └──→ Shared.Infrastructure ──→ Shared.Abstractions
  └──→ Shared.Infrastructure
```

### Quy tắc dependency (QUAN TRỌNG)

| Project | Được phép reference | KHÔNG được reference |
|---------|--------------------|--------------------|
| Shared.Abstractions | Không reference gì | Mọi project khác |
| Shared.Infrastructure | Shared.Abstractions | Contracts, Modules |
| Contracts.{Module} | Không reference gì (hoặc Shared.Abstractions nếu cần) | Modules, Infrastructure |
| Modules.{Module} | Contracts của chính nó, Shared.Abstractions, Shared.Infrastructure, Contracts của module khác | Modules của module khác |
| WebAPI | Tất cả Modules, Shared.Infrastructure | - |

### Quy tắc giao tiếp giữa modules

- Module A **KHÔNG BAO GIỜ** reference `Modules.B` trực tiếp
- Module A muốn gọi Module B → reference `Contracts.B` và inject interface từ Contracts.B
- Ví dụ: Modules.Scheduling muốn kiểm tra bệnh nhân → inject `IPatientService` từ `Contracts.Patients`

---

## 3. Chi tiết từng Project

### 3.1 Shared.Abstractions

**Nhiệm vụ:** Định nghĩa interfaces, base classes, exceptions dùng chung. Không có dependency nặng (không EF Core, không ASP.NET).

**Cấu trúc thư mục:**

```
Shared.Abstractions/
├── Entities/
│   ├── BaseEntity.cs          # Id (Guid), CreatedAt, UpdatedAt
│   └── AuditableEntity.cs     # + CreatedBy, UpdatedBy (kế thừa BaseEntity)
├── Interfaces/
│   ├── IRepository.cs         # Generic CRUD: GetById, GetAll, Find, Add, Update, Delete
│   └── IUnitOfWork.cs         # SaveChangesAsync
└── Exceptions/
    ├── BaseException.cs       # Abstract, chứa StatusCode (int)
    ├── NotFoundException.cs   # HTTP 404
    └── ValidationException.cs # HTTP 400, chứa Errors dictionary
```

**Khi nào thêm file vào đây:**
- Tạo base class mới cho entities (VD: `SoftDeletableEntity`)
- Tạo interface dùng chung (VD: `IClock`, `ICurrentUser`)
- Tạo exception type mới (VD: `ForbiddenException`, `ConflictException`)

**KHÔNG đặt vào đây:**
- Code phụ thuộc EF Core, ASP.NET, hoặc package bên thứ 3
- DTOs, request/response models (thuộc Contracts)
- Business logic (thuộc Modules)

### 3.2 Shared.Infrastructure

**Nhiệm vụ:** Triển khai các cross-cutting concerns: database, middleware, base repository. Có dependency nặng (EF Core, ASP.NET).

**Cấu trúc thư mục:**

```
Shared.Infrastructure/
├── Data/
│   ├── AppDbContext.cs        # DbContext chung, implements IUnitOfWork
│   │                          # - Auto set CreatedAt/UpdatedAt
│   │                          # - Load configurations từ module assemblies
│   └── BaseRepository.cs     # Generic repository implementation (CRUD)
├── Middleware/
│   └── ExceptionHandlingMiddleware.cs  # Bắt exception → JSON response
└── Extensions.cs              # AddSharedInfrastructure(): đăng ký DbContext, UnitOfWork
```

**Cơ chế đăng ký Entity Configuration từ Modules:**

AppDbContext dùng static method `RegisterModuleAssembly()` để nhận assembly chứa `IEntityTypeConfiguration`. Mỗi module gọi method này trong Extension method của mình:

```csharp
// Trong Modules.Auth/Extensions.cs
AppDbContext.RegisterModuleAssembly(typeof(UserConfiguration).Assembly);
```

AppDbContext sẽ tự động `ApplyConfigurationsFromAssembly()` cho tất cả assemblies đã đăng ký.

**Khi nào thêm file vào đây:**
- Tạo middleware mới (VD: `RequestLoggingMiddleware`)
- Tạo base class infrastructure (VD: `CachedRepository`)
- Thêm service cross-cutting (VD: `EmailService`, `FileStorageService`)

### 3.3 Contracts.{Module} (VD: Contracts.Auth)

**Nhiệm vụ:** Định nghĩa "hợp đồng công khai" của một module — những gì THẾ GIỚI BÊN NGOÀI được phép biết và sử dụng.

**Cấu trúc thư mục:**

```
Contracts.Auth/
├── DTOs/
│   ├── LoginRequest.cs        # Input: Username, Password
│   ├── RegisterRequest.cs     # Input: Username, Password, Email, FullName
│   ├── TokenResponse.cs       # Output: AccessToken, RefreshToken, ExpiresAt
│   └── UserDto.cs             # Output: Id, Username, Email, FullName, Role
└── Interfaces/
    └── IAuthService.cs        # LoginAsync, RegisterAsync, RefreshTokenAsync
```

**Quy tắc viết Contracts:**
- DTOs chỉ chứa properties, KHÔNG có logic
- Interfaces chỉ expose những method mà module khác hoặc Controller cần gọi
- KHÔNG để lộ chi tiết nội bộ (entities, repositories)

**Phân biệt:**
- `IAuthService` → trong **Contracts** (vì Controller và modules khác cần dùng)
- `IUserRepository` → trong **Modules** (vì chỉ AuthService nội bộ dùng)

### 3.4 Modules.{Module} (VD: Modules.Auth)

**Nhiệm vụ:** Triển khai toàn bộ business logic của module. Đây là "bên trong hộp đen".

**Cấu trúc thư mục:**

```
Modules.Auth/
├── Entities/                  # Domain models (kế thừa BaseEntity/AuditableEntity)
│   └── User.cs                # Username, PasswordHash, Email, FullName, Role,
│                              # RefreshToken, RefreshTokenExpiryTime, IsActive
├── Repositories/
│   ├── IUserRepository.cs     # Interface: GetByUsername, ExistsByEmail...
│   └── UserRepository.cs      # Implementation kế thừa BaseRepository<User>
├── Services/
│   └── AuthService.cs         # Implements IAuthService từ Contracts
│                              # - Login (verify BCrypt, generate JWT)
│                              # - Register (hash password, create user)
│                              # - RefreshToken (validate & rotate tokens)
├── Configurations/
│   └── UserConfiguration.cs   # EF Core: table "Users" schema "auth",
│                              # column constraints, unique indexes
└── Extensions.cs              # AddAuthModule(): đăng ký DI cho toàn module
```

**Extensions.cs pattern — cách đăng ký module:**

```csharp
public static IServiceCollection AddAuthModule(this IServiceCollection services, IConfiguration configuration)
{
    // 1. Đăng ký assembly cho EF Core configurations
    AppDbContext.RegisterModuleAssembly(typeof(UserConfiguration).Assembly);

    // 2. Đăng ký repositories
    services.AddScoped<IUserRepository, UserRepository>();

    // 3. Đăng ký services (interface từ Contracts → implementation từ Modules)
    services.AddScoped<IAuthService, AuthService>();

    // 4. Cấu hình đặc thù của module (VD: JWT)
    services.AddAuthentication(...)
            .AddJwtBearer(...);

    return services;
}
```

### 3.5 WebAPI (Host)

**Nhiệm vụ:** Composition root — nơi ghép tất cả modules lại, định nghĩa Controllers, cấu hình pipeline.

**Cấu trúc thư mục:**

```
WebAPI/
├── Controllers/
│   └── AuthController.cs      # [Route("api/[controller]")]
│                              # POST /api/auth/login
│                              # POST /api/auth/register
│                              # POST /api/auth/refresh
├── Program.cs                 # Composition root
├── appsettings.json           # ConnectionString, JWT config
├── appsettings.Development.json
└── Properties/
    └── launchSettings.json    # HTTP: 5020, HTTPS: 7274
```

**Program.cs pattern — cách wire modules:**

```csharp
// 1. Đăng ký services
builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services.AddSharedInfrastructure(builder.Configuration);  // DbContext
builder.Services.AddAuthModule(builder.Configuration);            // Auth module
// builder.Services.AddPatientsModule(builder.Configuration);     // Thêm module mới ở đây

// 2. Cấu hình pipeline (THỨ TỰ QUAN TRỌNG)
app.UseMiddleware<ExceptionHandlingMiddleware>();  // Đầu tiên: bắt mọi exception
app.UseHttpsRedirection();
app.UseAuthentication();                           // Trước Authorization
app.UseAuthorization();                            // Sau Authentication
app.MapControllers();
```

**Quy tắc viết Controller:**

```csharp
[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    // Inject interface từ CONTRACTS, không phải từ Modules
    private readonly IAuthService _authService;

    // Method pattern:
    [HttpPost("login")]
    public async Task<ActionResult<TokenResponse>> Login(LoginRequest request, CancellationToken ct)
    {
        var result = await _authService.LoginAsync(request, ct);
        return Ok(result);        // GET/POST trả Ok()
        // return Created(...);   // POST tạo mới trả Created()
        // return NoContent();    // PUT/DELETE trả NoContent()
    }
}
```

---

## 4. Flow logic chung

### 4.1 Request flow (từ HTTP đến Database)

```
HTTP Request
  → ExceptionHandlingMiddleware (bắt exception)
    → Authentication Middleware (verify JWT)
      → Authorization Middleware (check role/policy)
        → Controller (nhận request, gọi service)
          → Service (business logic, validation)
            → Repository (truy vấn database)
              → AppDbContext (EF Core, SQL Server)
            ← Repository trả entity
          ← Service trả DTO
        ← Controller trả ActionResult
      ← JSON Response
```

### 4.2 Exception flow

```
Service throw NotFoundException("User", "admin")
  → ExceptionHandlingMiddleware bắt được (là BaseException)
    → Set StatusCode = 404
    → Response: { "error": "User with key 'admin' was not found." }

Service throw ValidationException({ "Email": ["Email already exists."] })
  → ExceptionHandlingMiddleware bắt được (là ValidationException)
    → Set StatusCode = 400
    → Response: { "error": "One or more validation errors occurred.",
                   "errors": { "Email": ["Email already exists."] } }

Lỗi không mong đợi (NullReferenceException...)
  → ExceptionHandlingMiddleware bắt được (là Exception)
    → Set StatusCode = 500
    → Response: { "error": "An unexpected error occurred." }
```

### 4.3 Entity lifecycle (auto timestamps)

```
Tạo mới entity → AppDbContext.SaveChangesAsync()
  → ChangeTracker detect EntityState.Added
    → Set entity.CreatedAt = DateTime.UtcNow

Cập nhật entity → AppDbContext.SaveChangesAsync()
  → ChangeTracker detect EntityState.Modified
    → Set entity.UpdatedAt = DateTime.UtcNow
```

---

## 5. Hướng dẫn thêm Module mới

Ví dụ: Thêm module **Patients** (Quản lý bệnh nhân)

### Bước 1: Tạo Contracts.Patients

```
Contracts.Patients/
├── Contracts.Patients.csproj     # Class Library, không dependency
├── DTOs/
│   ├── CreatePatientRequest.cs
│   ├── UpdatePatientRequest.cs
│   └── PatientDto.cs
└── Interfaces/
    └── IPatientService.cs
```

```csharp
// Contracts.Patients/Interfaces/IPatientService.cs
public interface IPatientService
{
    Task<PatientDto> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<IReadOnlyList<PatientDto>> GetAllAsync(CancellationToken ct = default);
    Task<PatientDto> CreateAsync(CreatePatientRequest request, CancellationToken ct = default);
    Task<PatientDto> UpdateAsync(Guid id, UpdatePatientRequest request, CancellationToken ct = default);
    Task DeleteAsync(Guid id, CancellationToken ct = default);
}
```

### Bước 2: Tạo Modules.Patients

```
Modules.Patients/
├── Modules.Patients.csproj       # References: Contracts.Patients,
│                                 #   Shared.Abstractions, Shared.Infrastructure
├── Entities/
│   └── Patient.cs                # Kế thừa AuditableEntity
├── Repositories/
│   ├── IPatientRepository.cs     # Kế thừa IRepository<Patient> + methods riêng
│   └── PatientRepository.cs      # Kế thừa BaseRepository<Patient>
├── Services/
│   └── PatientService.cs         # Implements IPatientService
├── Configurations/
│   └── PatientConfiguration.cs   # EF Core config, schema "patients"
└── Extensions.cs                 # AddPatientsModule()
```

```csharp
// Modules.Patients/Extensions.cs
public static class Extensions
{
    public static IServiceCollection AddPatientsModule(this IServiceCollection services, IConfiguration configuration)
    {
        AppDbContext.RegisterModuleAssembly(typeof(PatientConfiguration).Assembly);
        services.AddScoped<IPatientRepository, PatientRepository>();
        services.AddScoped<IPatientService, PatientService>();
        return services;
    }
}
```

### Bước 3: Đăng ký trong WebAPI

```csharp
// WebAPI/Program.cs — thêm 1 dòng
builder.Services.AddPatientsModule(builder.Configuration);
```

```csharp
// WebAPI/Controllers/PatientsController.cs
[ApiController]
[Route("api/[controller]")]
[Authorize]  // Yêu cầu đăng nhập
public class PatientsController : ControllerBase
{
    private readonly IPatientService _patientService;
    // ... endpoints CRUD
}
```

### Bước 4: Cập nhật Solution

- Thêm project references trong .csproj
- Thêm vào HospitalTTG.slnx:
  ```xml
  <Folder Name="/Contracts/">
    <Project Path="Contracts.Patients/Contracts.Patients.csproj" />
  </Folder>
  <Folder Name="/Modules/">
    <Project Path="Modules.Patients/Modules.Patients.csproj" />
  </Folder>
  ```

### Bước 5: Migration

```bash
dotnet ef migrations add AddPatients --project Modules.Patients --startup-project WebAPI
dotnet ef database update --startup-project WebAPI
```

---

## 6. Quy ước đặt tên

### Projects
- `Shared.Abstractions` — interfaces, base classes chung
- `Shared.Infrastructure` — implementations chung
- `Contracts.{Module}` — DTOs & interfaces công khai
- `Modules.{Module}` — business logic nội bộ

### Namespaces (tự động theo folder)
- `Shared.Abstractions.Entities`
- `Shared.Infrastructure.Data`
- `Contracts.Auth.DTOs`
- `Modules.Auth.Services`

### Files
- Entity: `User.cs`, `Patient.cs` — singular
- Repository: `IUserRepository.cs` + `UserRepository.cs`
- Service: `IAuthService.cs` (Contracts) + `AuthService.cs` (Modules)
- Configuration: `UserConfiguration.cs`
- DTO: `LoginRequest.cs`, `UserDto.cs`, `TokenResponse.cs`
- Extension: `Extensions.cs` — mỗi project 1 file

### Database
- Schema: tên module lowercase (`auth`, `patients`, `scheduling`)
- Table: PascalCase số nhiều (`Users`, `Patients`)
- Column: PascalCase theo property name

---

## 7. Cấu hình

### Directory.Build.props
Áp dụng cho TẤT CẢ .csproj trong solution. Không cần lặp lại `<TargetFramework>`, `<Nullable>`, `<ImplicitUsings>` trong từng project.

### Directory.Packages.props
Quản lý NuGet version tập trung. Trong .csproj chỉ cần:
```xml
<PackageReference Include="Microsoft.EntityFrameworkCore" />  <!-- không cần Version -->
```
Thêm package mới → thêm `<PackageVersion>` trong `Directory.Packages.props`.

### appsettings.json

```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=localhost;Database=HospitalTTG;Trusted_Connection=True;TrustServerCertificate=True;"
  },
  "Jwt": {
    "Key": "your-secret-key-at-least-32-characters",
    "Issuer": "HospitalTTG",
    "Audience": "HospitalTTG",
    "ExpiryMinutes": 60,
    "RefreshTokenExpiryDays": 7
  }
}
```

---

## 8. Commands thường dùng

```bash
# Build
dotnet build

# Run
dotnet run --project WebAPI

# EF Core Migrations
dotnet ef migrations add {Name} --project {ModuleProject} --startup-project WebAPI
dotnet ef database update --startup-project WebAPI

# Tạo project mới
dotnet new classlib -n Contracts.Patients
dotnet new classlib -n Modules.Patients
dotnet sln HospitalTTG.slnx add Contracts.Patients/Contracts.Patients.csproj --solution-folder Contracts
dotnet sln HospitalTTG.slnx add Modules.Patients/Modules.Patients.csproj --solution-folder Modules

# Thêm project reference
dotnet add Modules.Patients reference Contracts.Patients Shared.Abstractions Shared.Infrastructure
dotnet add WebAPI reference Modules.Patients
```

---

## 9. Lưu ý quan trọng

1. **Thứ tự middleware trong Program.cs RẤT QUAN TRỌNG** — `UseAuthentication()` phải trước `UseAuthorization()`, `ExceptionHandlingMiddleware` phải đầu tiên.

2. **Mỗi module tự đăng ký assembly** qua `AppDbContext.RegisterModuleAssembly()` trong Extensions.cs — nếu quên, EF Core sẽ không biết entity configurations của module đó.

3. **Controller chỉ inject interface từ Contracts** — không bao giờ inject Repository hoặc class từ Modules trực tiếp.

4. **Mọi entity kế thừa BaseEntity hoặc AuditableEntity** — để tự động có Id, CreatedAt, UpdatedAt.

5. **Throw custom exceptions trong Service** — middleware sẽ tự convert thành JSON response với status code phù hợp. Không cần try-catch trong Controller.

6. **Không dùng CQRS/MediatR** — dùng Service/Repository pattern trực tiếp.
