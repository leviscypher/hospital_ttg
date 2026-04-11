using Modules.Auth;
using Modules.System;
using Shared.Infrastructure;
using Shared.Infrastructure.Middleware;
using Scalar.AspNetCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();

// Shared infrastructure (DbContext, UnitOfWork)
builder.Services.AddSharedInfrastructure(builder.Configuration);

// Modules
builder.Services.AddAuthModule(builder.Configuration);
builder.Services.AddSystemModule(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
    app.MapScalarApiReference();
}

app.UseMiddleware<ExceptionHandlingMiddleware>();
app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
