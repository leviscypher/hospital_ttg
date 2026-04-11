using Modules.System.Entities;

namespace Modules.System.Repositories;

public interface IMenuRepository
{
    Task<Menu?> GetByIdAsync(long id, CancellationToken ct = default);
    Task<IReadOnlyList<Menu>> GetAllAsync(CancellationToken ct = default);
    Task<IReadOnlyList<Menu>> GetByParentIdAsync(long? parentId, CancellationToken ct = default);
    Task<Menu> AddAsync(Menu entity, CancellationToken ct = default);
    void Update(Menu entity);
    void Delete(Menu entity);
}
