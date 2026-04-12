namespace Contracts.Article.DTOs;

public class TagDto
{
    public Guid Id { get; set; }
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
}

public class CreateTagRequest
{
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
}

public class UpdateTagRequest
{
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
}
