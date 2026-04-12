using Contracts.Article.DTOs;

namespace Contracts.Article.Interfaces;

public interface IArticleCategoryService
{
    Task<IReadOnlyList<ArticleCategoryDto>> GetAllAsync(CancellationToken ct = default);
    Task<ArticleCategoryDto?> GetByIdAsync(Guid id, CancellationToken ct = default);
    Task<ArticleCategoryDto> CreateAsync(CreateArticleCategoryRequest request, CancellationToken ct = default);
    Task<ArticleCategoryDto> UpdateAsync(Guid id, UpdateArticleCategoryRequest request, CancellationToken ct = default);
    Task DeleteAsync(Guid id, CancellationToken ct = default);
}
