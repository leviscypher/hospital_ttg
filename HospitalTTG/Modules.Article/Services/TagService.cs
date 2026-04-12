using Contracts.Article.DTOs;
using Contracts.Article.Interfaces;
using Modules.Article.Entities;
using Modules.Article.Repositories;
using Shared.Abstractions.Interfaces;

namespace Modules.Article.Services;

internal sealed class TagService : ITagService
{
    private readonly ITagRepository _repository;
    private readonly IUnitOfWork _unitOfWork;

    public TagService(ITagRepository repository, IUnitOfWork unitOfWork)
    {
        _repository = repository;
        _unitOfWork = unitOfWork;
    }

    public async Task<IReadOnlyList<TagDto>> GetAllAsync(CancellationToken ct = default)
    {
        var entities = await _repository.GetAllAsync(ct);
        return entities.Select(e => new TagDto
        {
            Id = e.Id,
            Name = e.Name,
            Slug = e.Slug
        }).ToList();
    }

    public async Task<TagDto?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) return null;
        return new TagDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug
        };
    }

    public async Task<TagDto> CreateAsync(CreateTagRequest request, CancellationToken ct = default)
    {
        var entity = new Tag
        {
            Name = request.Name,
            Slug = request.Slug
        };

        _repository.Add(entity);
        await _unitOfWork.SaveChangesAsync(ct);

        return new TagDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug
        };
    }

    public async Task<TagDto> UpdateAsync(Guid id, UpdateTagRequest request, CancellationToken ct = default)
    {
        var entity = await _repository.GetByIdAsync(id, ct);
        if (entity == null) throw new Exception("Not found");

        entity.Name = request.Name;
        entity.Slug = request.Slug;

        _repository.Update(entity);
        await _unitOfWork.SaveChangesAsync(ct);

        return new TagDto
        {
            Id = entity.Id,
            Name = entity.Name,
            Slug = entity.Slug
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
