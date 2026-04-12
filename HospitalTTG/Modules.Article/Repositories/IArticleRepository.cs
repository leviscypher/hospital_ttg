using Modules.Article.Entities;

namespace Modules.Article.Repositories;

public interface IArticleRepository
{
    Task<IReadOnlyList<Entities.Article>> GetAllAsync(CancellationToken ct = default);
    Task<Entities.Article?> GetByIdAsync(Guid id, CancellationToken ct = default);
    void Add(Entities.Article article);
    void Update(Entities.Article article);
    void Delete(Entities.Article article);
}
