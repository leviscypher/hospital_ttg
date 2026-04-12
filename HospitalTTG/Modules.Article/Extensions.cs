using Contracts.Article.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Modules.Article.Configurations;
using Modules.Article.Repositories;
using Modules.Article.Services;
using Shared.Infrastructure.Data;

namespace Modules.Article;

public static class Extensions
{
    public static IServiceCollection AddArticleModule(this IServiceCollection services, IConfiguration configuration)
    {
        AppDbContext.RegisterModuleAssembly(typeof(ArticleConfiguration).Assembly);

        // Repositories
        services.AddScoped<IArticleCategoryRepository, ArticleCategoryRepository>();
        services.AddScoped<IArticleRepository, ArticleRepository>();
        services.AddScoped<ITagRepository, TagRepository>();
        services.AddScoped<IArticleTagRepository, ArticleTagRepository>();

        // Services
        services.AddScoped<IArticleCategoryService, ArticleCategoryService>();
        services.AddScoped<IArticleService, ArticleService>();
        services.AddScoped<ITagService, TagService>();

        return services;
    }
}
