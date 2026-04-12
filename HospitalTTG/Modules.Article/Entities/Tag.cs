using Shared.Abstractions.Entities;

namespace Modules.Article.Entities;

public class Tag : AuditableEntity
{
    public string Name { get; set; } = null!;
    public string Slug { get; set; } = null!;
}
