using Modules.Article.Entities;

namespace Modules.Article.Repositories;

public interface IArticleCategoryRepository
{
    Task<IReadOnlyList<ArticleCategory>> GetAllAsync(CancellationToken ct = default);
    Task<ArticleCategory?> GetByIdAsync(Guid id, CancellationToken ct = default);
    void Add(ArticleCategory category);
    void Update(ArticleCategory category);
    void Delete(ArticleCategory category);
}
