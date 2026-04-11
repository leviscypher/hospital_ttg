using Shared.Abstractions.Entities;

namespace Modules.System.Entities;

public class Menu : BaseTrackingEntity
{
    public long MenuId { get; set; }
    public long? ParentMenuId { get; set; }
    public string Title { get; set; } = string.Empty;
    public string? Url { get; set; }
    public string? Icon { get; set; }
    public int SortOrder { get; set; } = 0;
    public bool IsActive { get; set; } = true;
    public bool IsExternal { get; set; } = false;
}
