using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    /// <inheritdoc />
    public partial class DiaryExerciseSerieTableFixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_diary_exercise_series_default_exercises_diary_exercise_id",
                table: "diary_exercise_series");

            migrationBuilder.AddForeignKey(
                name: "FK_diary_exercise_series_diary_exercises_diary_exercise_id",
                table: "diary_exercise_series",
                column: "diary_exercise_id",
                principalTable: "diary_exercises",
                principalColumn: "diary_exercise_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_diary_exercise_series_diary_exercises_diary_exercise_id",
                table: "diary_exercise_series");

            migrationBuilder.AddForeignKey(
                name: "FK_diary_exercise_series_default_exercises_diary_exercise_id",
                table: "diary_exercise_series",
                column: "diary_exercise_id",
                principalTable: "default_exercises",
                principalColumn: "default_exercise_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
