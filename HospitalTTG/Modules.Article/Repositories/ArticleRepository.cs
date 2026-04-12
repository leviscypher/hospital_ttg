using Microsoft.EntityFrameworkCore;
using Modules.Article.Entities;
using Shared.Infrastructure.Data;

namespace Modules.Article.Repositories;

internal sealed class ArticleRepository : IArticleRepository
{
    private readonly DbSet<Entities.Article> _dbSet;

    public ArticleRepository(AppDbContext context)
    {
        _dbSet = context.Set<Entities.Article>();
    }

    public async Task<IReadOnlyList<Entities.Article>> GetAllAsync(CancellationToken ct = default)
    {
        return await _dbSet.AsNoTracking().ToListAsync(ct);
    }

    public async Task<Entities.Article?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _dbSet.FirstOrDefaultAsync(x => x.Id == id, ct);
    }

    public void Add(Entities.Article article)
    {
        _dbSet.Add(article);
    }

    public void Update(Entities.Article article)
    {
        _dbSet.Update(article);
    }

    public void Delete(Entities.Article article)
    {
        _dbSet.Remove(article);
    }
}
