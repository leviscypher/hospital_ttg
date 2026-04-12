namespace Contracts.Article.DTOs;

public class ArticleDto
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

public class CreateArticleRequest
{
    public string Title { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public string? Summary { get; set; }
    public string Content { get; set; } = null!;
    public string? Thumbnail { get; set; }
    public Guid CategoryId { get; set; }
    public string? Author { get; set; }
    public string Status { get; set; } = null!;
    public DateTime? PublishedAt { get; set; }
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
}

public class UpdateArticleRequest
{
    public string Title { get; set; } = null!;
    public string Slug { get; set; } = null!;
    public string? Summary { get; set; }
    public string Content { get; set; } = null!;
    public string? Thumbnail { get; set; }
    public Guid CategoryId { get; set; }
    public string? Author { get; set; }
    public string Status { get; set; } = null!;
    public DateTime? PublishedAt { get; set; }
    public string? MetaTitle { get; set; }
    public string? MetaDescription { get; set; }
}
