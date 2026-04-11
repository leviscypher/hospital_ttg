using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Modules.System.Entities;

namespace Modules.System.Configurations;

public class MenuConfiguration : IEntityTypeConfiguration<Menu>
{
    public void Configure(EntityTypeBuilder<Menu> builder)
    {
        builder.ToTable("Menus", "system");

        builder.HasKey(m => m.MenuId);

        builder.Property(m => m.MenuId)
            .UseIdentityColumn();

        builder.Property(m => m.Title)
            .IsRequired()
            .HasMaxLength(200);

        builder.Property(m => m.Url)
            .HasMaxLength(500);

        builder.Property(m => m.Icon)
            .HasMaxLength(100);

        builder.Property(m => m.CreatedBy)
            .HasMaxLength(100);

        builder.Property(m => m.UpdatedBy)
            .HasMaxLength(100);

        builder.HasIndex(m => m.ParentMenuId);
        builder.HasIndex(m => m.SortOrder);
    }
}
