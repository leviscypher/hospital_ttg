namespace Contracts.System.DTOs;

public class RoleMenuDto
{
    public long RoleMenuId { get; set; }
    public required string RoleId { get; set; }
    public long MenuId { get; set; }
    public bool CanView { get; set; }
}
