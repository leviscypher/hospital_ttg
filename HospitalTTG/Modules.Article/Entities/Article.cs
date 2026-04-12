using Shared.Abstractions.Entities;

namespace Modules.Article.Entities;

public class Article : BaseTrackingEntity
{
    public Guid Id { get; set; }
    public string Title { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public string? Summary { get; set; }
    public string Content { get; set; } = null!;
    public string? Thumbnail { get; set; }
    public Guid CategoryId { get; set; }
    public string? Author { get; set; }
    public string Status { get; set; } = null!;
    public int Views { get; set; }
    public DateTime? PublishedAt { get; set; }
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
}
