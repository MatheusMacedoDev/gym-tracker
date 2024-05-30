using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace GymTracker.Domain.Entities;

[Table("muscle_groups")]
[Index(nameof(GroupName), IsUnique = true)]
public class MuscleGroup
{
    [Key]
    [Column("muscle_group_id")]
    public Guid MucleGroupId { get; private set; }

    [Required]
    [Column("group_name")]
    public string? GroupName { get; private set; }

    [Column("muscle_image")]
    public string? MuscleImage { get; private set; }

    protected MuscleGroup()
    {
    }

    public MuscleGroup(string groupName, string muscleImage)
    {
        MucleGroupId = Guid.NewGuid();
        GroupName = groupName;
        MuscleImage = muscleImage;
    }
}
