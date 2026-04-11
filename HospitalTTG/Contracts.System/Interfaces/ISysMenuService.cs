using Contracts.System.DTOs;

namespace Contracts.System.Interfaces;

public interface ISysMenuService
{
    Task<IReadOnlyList<MenuDto>> GetAllMenusAsync(CancellationToken ct = default);
    Task<MenuDto> GetMenuByIdAsync(long id, CancellationToken ct = default);
    Task<MenuDto> CreateMenuAsync(CreateMenuRequest request, CancellationToken ct = default);
    Task<MenuDto> UpdateMenuAsync(long id, UpdateMenuRequest request, CancellationToken ct = default);
    Task DeleteMenuAsync(long id, CancellationToken ct = default);
    Task<IReadOnlyList<MenuDto>> GetMenusByRoleAsync(string roleId, CancellationToken ct = default);
    Task AssignMenusToRoleAsync(AssignRoleMenuRequest request, CancellationToken ct = default);
}
