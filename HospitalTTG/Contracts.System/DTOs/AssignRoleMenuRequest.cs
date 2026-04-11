namespace Contracts.System.DTOs;

public class AssignRoleMenuRequest
{
    public required string RoleId { get; set; }
    public required List<long> MenuIds { get; set; }
}
