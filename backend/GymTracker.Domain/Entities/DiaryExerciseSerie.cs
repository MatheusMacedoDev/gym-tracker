using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace GymTracker.Domain.Entities;

[Table("diary_exercise_series")]
public class DiaryExerciseSerie
{
    [Key]
    [Column("diary_exercise_serie_id")]
    public Guid DiaryExerciseSerieId { get; private set; }

    [Required]
    [Column("serie_number", TypeName = "smallint")]
    public short SerieNumber { get; private set; }

    [Required]
    [Column("repetitions", TypeName = "smallint")]
    public short Repetitions { get; private set; }

    [Required]
    [Column("overload", TypeName = "smallint")]
    public short Overload { get; private set; }

    // Diary Exercise Reference

    [Required]
    [Column("diary_exercise_id")]
    public Guid DiaryExerciseId { get; private set; }

    [ForeignKey(nameof(DiaryExerciseId))]
    public DiaryExercise? DiaryExercise { get; private set; }

    protected DiaryExerciseSerie()
    {
    }

    public DiaryExerciseSerie(short serieNumber, short repetitions, short overload, Guid diaryExerciseId)
    {
        DiaryExerciseSerieId = Guid.NewGuid();

        SerieNumber = serieNumber;
        Repetitions = repetitions;
        Overload = overload;

        DiaryExerciseId = diaryExerciseId;
    }
}

