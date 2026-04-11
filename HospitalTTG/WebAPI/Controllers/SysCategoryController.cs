using Contracts.System.DTOs;
using Contracts.System.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace WebAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
[Authorize]
public class SysCategoryController : ControllerBase
{
    private readonly ISysCategoryService _sysCategoryService;

    public SysCategoryController(ISysCategoryService sysCategoryService)
    {
        _sysCategoryService = sysCategoryService;
    }

    [HttpGet]
    public async Task<ActionResult<IReadOnlyList<SysCategoryDto>>> GetAll(CancellationToken ct)
    {
        var result = await _sysCategoryService.GetAllAsync(ct);
        return Ok(result);
    }

    [HttpGet("{id:guid}")]
    public async Task<ActionResult<SysCategoryDto>> GetById(Guid id, CancellationToken ct)
    {
        var result = await _sysCategoryService.GetByIdAsync(id, ct);
        return Ok(result);
    }

    [HttpPost]
    public async Task<ActionResult<SysCategoryDto>> Create(CreateSysCategoryRequest request, CancellationToken ct)
    {
        var result = await _sysCategoryService.CreateAsync(request, ct);
        return Created($"api/SysCategory/{result.Id}", result);
    }

    [HttpPut("{id:guid}")]
    public async Task<ActionResult<SysCategoryDto>> Update(Guid id, UpdateSysCategoryRequest request, CancellationToken ct)
    {
        var result = await _sysCategoryService.UpdateAsync(id, request, ct);
        return Ok(result);
    }

    [HttpDelete("{id:guid}")]
    public async Task<IActionResult> Delete(Guid id, CancellationToken ct)
    {
        await _sysCategoryService.DeleteAsync(id, ct);
        return NoContent();
    }
}
