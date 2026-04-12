using Contracts.Article.DTOs;
using Contracts.Article.Interfaces;
using Modules.Article.Repositories;
using Shared.Abstractions.Interfaces;

namespace Modules.Article.Services;

internal sealed class ArticleService : IArticleService
{
    private readonly IArticleRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public ArticleService(IArticleRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IReadOnlyList<ArticleDto>> GetAllAsync(CancellationToken ct = default)
    {
        var entities = await _repository.GetAllAsync(ct);
        return entities.Select(e => new ArticleDto
        {
            Id = e.Id,
            Title = e.Title,
            Slug = e.Slug,
            Summary = e.Summary,
            Content = e.Content,
            Thumbnail = e.Thumbnail,
            CategoryId = e.CategoryId,
            Author = e.Author,
            Status = e.Status,
            Views = e.Views,
            PublishedAt = e.PublishedAt,
            MetaTitle = e.MetaTitle,
            MetaDescription = e.MetaDescription
        }).ToList();
    }

    public async Task<ArticleDto?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) return null;
        return new ArticleDto
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            Summary = entity.Summary,
            Content = entity.Content,
            Thumbnail = entity.Thumbnail,
            CategoryId = entity.CategoryId,
            Author = entity.Author,
            Status = entity.Status,
            Views = entity.Views,
            PublishedAt = entity.PublishedAt,
            MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription
        };
    }

    public async Task<ArticleDto> CreateAsync(CreateArticleRequest request, CancellationToken ct = default)
    {
        var entity = new Entities.Article
        {
            Title = request.Title,
            Slug = request.Slug,
            Summary = request.Summary,
            Content = request.Content,
            Thumbnail = request.Thumbnail,
            CategoryId = request.CategoryId,
            Author = request.Author,
            Status = request.Status,
            Views = 0,
            PublishedAt = request.PublishedAt,
            MetaTitle = request.MetaTitle,
            MetaDescription = request.MetaDescription
        };

        _repository.Add(entity);
        await _unitOfWork.SaveChangesAsync(ct);

        return new ArticleDto
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            Summary = entity.Summary,
            Content = entity.Content,
            Thumbnail = entity.Thumbnail,
            CategoryId = entity.CategoryId,
            Author = entity.Author,
            Status = entity.Status,
            Views = entity.Views,
            PublishedAt = entity.PublishedAt,
            MetaTitle = entity.MetaTitle,
            MetaDescription = entity.MetaDescription
        };
    }

    public async Task<ArticleDto> UpdateAsync(Guid id, UpdateArticleRequest request, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) throw new Exception("Not found");

        entity.Title = request.Title;
        entity.Slug = request.Slug;
        entity.Summary = request.Summary;
        entity.Content = request.Content;
        entity.Thumbnail = request.Thumbnail;
        entity.CategoryId = request.CategoryId;
        entity.Author = request.Author;
        entity.Status = request.Status;
        entity.PublishedAt = request.PublishedAt;
        entity.MetaTitle = request.MetaTitle;
        entity.MetaDescription = request.MetaDescription;

        _repository.Update(entity);
        await _unitOfWork.SaveChangesAsync(ct);

        return new ArticleDto
        {
            Id = entity.Id,
            Title = entity.Title,
            Slug = entity.Slug,
            Summary = entity.Summary,
            Content = entity.Content,
            Thumbnail = entity.Thumbnail,
            CategoryId = entity.CategoryId,
            Author = entity.Author,
            Status = entity.Status,
            Views = entity.Views,
            PublishedAt = entity.PublishedAt,
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
