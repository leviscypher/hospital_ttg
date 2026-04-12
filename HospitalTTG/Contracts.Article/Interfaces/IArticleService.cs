using Contracts.Article.DTOs;

namespace Contracts.Article.Interfaces;

public interface IArticleService
{
    Task<IReadOnlyList<ArticleDto>> GetAllAsync(CancellationToken ct = default);
    Task<ArticleDto?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<ArticleDto> CreateAsync(CreateArticleRequest request, CancellationToken ct = default);
    Task<ArticleDto> UpdateAsync(Guid id, UpdateArticleRequest request, CancellationToken ct = default);
    Task DeleteAsync(Guid id, CancellationToken ct = default);
}
