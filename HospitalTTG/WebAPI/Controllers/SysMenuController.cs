using Contracts.System.DTOs;
using Contracts.System.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class SysMenuController : ControllerBase
{
    private readonly ISysMenuService _sysMenuService;

    public SysMenuController(ISysMenuService sysMenuService)
    {
        _sysMenuService = sysMenuService;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<MenuDto>>> GetAllMenus(CancellationToken ct)
    {
        var result = await _sysMenuService.GetAllMenusAsync(ct);
        return Ok(result);
    }

    [HttpGet("{id:long}")]
    public async Task<ActionResult<MenuDto>> GetMenuById(long id, CancellationToken ct)
    {
        var result = await _sysMenuService.GetMenuByIdAsync(id, ct);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<MenuDto>> CreateMenu(CreateMenuRequest request, CancellationToken ct)
    {
        var result = await _sysMenuService.CreateMenuAsync(request, ct);
        return Created($"api/sysmenu/{result.MenuId}", result);
    }

    [HttpPut("{id:long}")]
    public async Task<ActionResult<MenuDto>> UpdateMenu(long id, UpdateMenuRequest request, CancellationToken ct)
    {
        var result = await _sysMenuService.UpdateMenuAsync(id, request, ct);
        return Ok(result);
    }

    [HttpDelete("{id:long}")]
    public async Task<IActionResult> DeleteMenu(long id, CancellationToken ct)
    {
        await _sysMenuService.DeleteMenuAsync(id, ct);
        return NoContent();
    }

    [HttpGet("role/{roleId}")]
    public async Task<ActionResult<IReadOnlyList<MenuDto>>> GetMenusByRole(string roleId, CancellationToken ct)
    {
        var result = await _sysMenuService.GetMenusByRoleAsync(roleId, ct);
        return Ok(result);
    }

    [HttpPost("role/assign")]
    public async Task<IActionResult> AssignMenusToRole(AssignRoleMenuRequest request, CancellationToken ct)
    {
        await _sysMenuService.AssignMenusToRoleAsync(request, ct);
        return NoContent();
    }
}
