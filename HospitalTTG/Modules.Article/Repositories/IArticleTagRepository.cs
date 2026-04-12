using Modules.Article.Entities;

namespace Modules.Article.Repositories;

public interface IArticleTagRepository
{
    Task<IReadOnlyList<ArticleTag>> GetAllByArticleIdAsync(Guid articleId, CancellationToken ct = default);
    Task<IReadOnlyList<ArticleTag>> GetAllByTagIdAsync(Guid tagId, CancellationToken ct = default);
    void Add(ArticleTag articleTag);
    void Delete(ArticleTag articleTag);
}
