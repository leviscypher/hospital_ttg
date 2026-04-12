using Shared.Abstractions.Entities;

namespace Modules.Article.Entities;

public class ArticleCategory : BaseTrackingEntity
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public string? Description { get; set; }
    public Guid? ParentId { get; set; }
    public string? Image { get; set; }
    public bool Status { get; set; }
    public int Order { get; set; }
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
}
