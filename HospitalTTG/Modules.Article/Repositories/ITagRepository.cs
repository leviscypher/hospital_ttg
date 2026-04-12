using Modules.Article.Entities;

namespace Modules.Article.Repositories;

public interface ITagRepository
{
    Task<IReadOnlyList<Tag>> GetAllAsync(CancellationToken ct = default);
    Task<Tag?> GetByIdAsync(Guid id, CancellationToken ct = default);
    void Add(Tag tag);
    void Update(Tag tag);
    void Delete(Tag tag);
}
