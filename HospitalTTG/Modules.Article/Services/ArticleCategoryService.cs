using Contracts.Article.DTOs;
using Contracts.Article.Interfaces;
using Modules.Article.Entities;
using Modules.Article.Repositories;
using Shared.Abstractions.Interfaces;

namespace Modules.Article.Services;

internal sealed class ArticleCategoryService : IArticleCategoryService
{
    private readonly IArticleCategoryRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public ArticleCategoryService(IArticleCategoryRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IReadOnlyList<ArticleCategoryDto>> GetAllAsync(CancellationToken ct = default)
    {
        var entities = await _repository.GetAllAsync(ct);
        return entities.Select(e => new ArticleCategoryDto
        {
            Id = e.Id,
            Name = e.Name,
            Slug = e.Slug,
            Description = e.Description,
            ParentId = e.ParentId,
            Image = e.Image,
            Status = e.Status,
            Order = e.Order,
            MetaTitle = e.MetaTitle,
            MetaDescription = e.MetaDescription
        }).ToList();
    }

    public async Task<ArticleCategoryDto?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) return null;
        return new ArticleCategoryDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug,
            Description = entity.Description,
            ParentId = entity.ParentId,
            Image = entity.Image,
            Status = entity.Status,
            Order = entity.Order,
            MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription
        };
    }

    public async Task<ArticleCategoryDto> CreateAsync(CreateArticleCategoryRequest request, CancellationToken ct = default)
    {
        var entity = new ArticleCategory
        {
            Name = request.Name,
            Slug = request.Slug,
            Description = request.Description,
            ParentId = request.ParentId,
            Image = request.Image,
            Status = request.Status,
            Order = request.Order,
            MetaTitle = request.MetaTitle,
            MetaDescription = request.MetaDescription
        };

        _repository.Add(entity);
        await _unitOfWork.SaveChangesAsync(ct);

        return new ArticleCategoryDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug,
            Description = entity.Description,
            ParentId = entity.ParentId,
            Image = entity.Image,
            Status = entity.Status,
            Order = entity.Order,
            MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription
        };
    }

    public async Task<ArticleCategoryDto> UpdateAsync(Guid id, UpdateArticleCategoryRequest request, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) throw new Exception("Not found");

        entity.Name = request.Name;
        entity.Slug = request.Slug;
        entity.Description = request.Description;
        entity.ParentId = request.ParentId;
        entity.Image = request.Image;
        entity.Status = request.Status;
        entity.Order = request.Order;
        entity.MetaTitle = request.MetaTitle;
        entity.MetaDescription = request.MetaDescription;

        _repository.Update(entity);
        await _unitOfWork.SaveChangesAsync(ct);

        return new ArticleCategoryDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug,
            Description = entity.Description,
            ParentId = entity.ParentId,
            Image = entity.Image,
            Status = entity.Status,
            Order = entity.Order,
            MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription
        };
    }

    public async Task DeleteAsync(Guid id, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) throw new Exception("Not found");

        _repository.Delete(entity);
        await _unitOfWork.SaveChangesAsync(ct);
    }
}
