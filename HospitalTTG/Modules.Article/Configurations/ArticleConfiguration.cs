using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Modules.Article.Configurations;

public class ArticleConfiguration : IEntityTypeConfiguration<Entities.Article>
{
    public void Configure(EntityTypeBuilder<Entities.Article> builder)
    {
        builder.ToTable("Articles");
        builder.HasKey(x => x.Id);
        
        builder.Property(x => x.Title).IsRequired().HasMaxLength(255);
        builder.Property(x => x.Slug).IsRequired().HasMaxLength(255);
        builder.Property(x => x.Status).IsRequired().HasMaxLength(50);
        builder.Property(x => x.Author).HasMaxLength(150);
    }
}
