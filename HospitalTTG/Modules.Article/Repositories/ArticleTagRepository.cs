using Microsoft.EntityFrameworkCore;
using Modules.Article.Entities;
using Shared.Infrastructure.Data;

namespace Modules.Article.Repositories;

internal sealed class ArticleTagRepository : IArticleTagRepository
{
    private readonly DbSet<ArticleTag> _dbSet;

    public ArticleTagRepository(AppDbContext context)
    {
        _dbSet = context.Set<ArticleTag>();
    }

    public async Task<IReadOnlyList<ArticleTag>> GetAllByArticleIdAsync(Guid articleId, CancellationToken ct = default)
    {
        return await _dbSet.AsNoTracking().Where(x => x.ArticleId == articleId).ToListAsync(ct);
    }

    public async Task<IReadOnlyList<ArticleTag>> GetAllByTagIdAsync(Guid tagId, CancellationToken ct = default)
    {
        return await _dbSet.AsNoTracking().Where(x => x.TagId == tagId).ToListAsync(ct);
    }

    public void Add(ArticleTag articleTag)
    {
        _dbSet.Add(articleTag);
    }

    public void Delete(ArticleTag articleTag)
    {
        _dbSet.Remove(articleTag);
    }
}
