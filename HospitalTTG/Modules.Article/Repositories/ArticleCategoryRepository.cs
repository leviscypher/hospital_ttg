using Microsoft.EntityFrameworkCore;
using Modules.Article.Entities;
using Shared.Infrastructure.Data;

namespace Modules.Article.Repositories;

internal sealed class ArticleCategoryRepository : IArticleCategoryRepository
{
    private readonly DbSet<ArticleCategory> _dbSet;

    public ArticleCategoryRepository(AppDbContext context)
    {
        _dbSet = context.Set<ArticleCategory>();
    }

    public async Task<IReadOnlyList<ArticleCategory>> GetAllAsync(CancellationToken ct = default)
    {
        return await _dbSet.AsNoTracking().ToListAsync(ct);
    }

    public async Task<ArticleCategory?> GetByIdAsync(Guid id, CancellationToken ct = default)
    {
        return await _dbSet.FirstOrDefaultAsync(x => x.Id == id, ct);
    }

    public void Add(ArticleCategory category)
    {
        _dbSet.Add(category);
    }

    public void Update(ArticleCategory category)
    {
        _dbSet.Update(category);
    }

    public void Delete(ArticleCategory category)
    {
        _dbSet.Remove(category);
    }
}
