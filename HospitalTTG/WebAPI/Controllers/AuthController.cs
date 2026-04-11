using Contracts.Auth.DTOs;
using Contracts.Auth.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthController : ControllerBase
{
    private readonly IAuthService _authService;

    public AuthController(IAuthService authService)
    {
        _authService = authService;
    }

    [HttpPost("login")]
    public async Task<ActionResult<TokenResponse>> Login(LoginRequest request, CancellationToken ct)
    {
        var result = await _authService.LoginAsync(request, ct);
        return Ok(result);
    }

    [HttpPost("register")]
    public async Task<ActionResult<UserDto>> Register(RegisterRequest request, CancellationToken ct)
    {
        var result = await _authService.RegisterAsync(request, ct);
        return Created($"api/auth/users/{result.Id}", result);
    }

    [HttpPost("refresh")]
    public async Task<ActionResult<TokenResponse>> RefreshToken([FromBody] string refreshToken, CancellationToken ct)
    {
        var result = await _authService.RefreshTokenAsync(refreshToken, ct);
        return Ok(result);
    }
}
