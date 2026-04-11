using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Shared.Abstractions.Entities;
using Shared.Abstractions.Interfaces;

namespace Shared.Infrastructure.Data;

public class AppDbContext : DbContext, IUnitOfWork
{
    private static readonly List<Assembly> _moduleAssemblies = [];

    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {
    }

    public static void RegisterModuleAssembly(Assembly assembly)
    {
        if (!_moduleAssemblies.Contains(assembly))
            _moduleAssemblies.Add(assembly);
    }

    public override Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
    {
        foreach (var entry in ChangeTracker.Entries<BaseEntity>())
        {
            switch (entry.State)
            {
                case EntityState.Added:
                    entry.Entity.CreatedAt = DateTime.UtcNow;
                    break;
                case EntityState.Modified:
                    entry.Entity.UpdatedAt = DateTime.UtcNow;
                    break;
            }
        }

        return base.SaveChangesAsync(cancellationToken);
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        foreach (var assembly in _moduleAssemblies)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(assembly);
        }
    }
}
