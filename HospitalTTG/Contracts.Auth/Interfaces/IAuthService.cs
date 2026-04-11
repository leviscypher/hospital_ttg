using Contracts.Auth.DTOs;

namespace Contracts.Auth.Interfaces;

public interface IAuthService
{
    Task<TokenResponse> LoginAsync(LoginRequest request, CancellationToken ct = default);
    Task<UserDto> RegisterAsync(RegisterRequest request, CancellationToken ct = default);
    Task<TokenResponse> RefreshTokenAsync(string refreshToken, CancellationToken ct = default);
}
