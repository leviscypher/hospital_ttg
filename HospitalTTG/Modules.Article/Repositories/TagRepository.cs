using Microsoft.EntityFrameworkCore;
using Modules.Article.Entities;
using Shared.Infrastructure.Data;

namespace Modules.Article.Repositories;

internal sealed class TagRepository : ITagRepository
{
    private readonly DbSet<Tag> _dbSet;

    public TagRepository(AppDbContext context)
    {
        _dbSet = context.Set<Tag>();
    }

    public async Task<IReadOnlyList<Tag>> GetAllAsync(CancellationToken ct = default)
    {
        return await _dbSet.AsNoTracking().ToListAsync(ct);
    }

    public async Task<Tag?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _dbSet.FirstOrDefaultAsync(x => x.Id == id, ct);
    }

    public void Add(Tag tag)
    {
        _dbSet.Add(tag);
    }

    public void Update(Tag tag)
    {
        _dbSet.Update(tag);
    }

    public void Delete(Tag tag)
    {
        _dbSet.Remove(tag);
    }
}
