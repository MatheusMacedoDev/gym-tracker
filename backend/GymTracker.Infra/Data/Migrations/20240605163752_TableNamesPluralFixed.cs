using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    /// <inheritdoc />
    public partial class TableNamesPluralFixed : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_exercise_muscle_group_exercises_exercise_id",
                table: "exercise_muscle_group");

            migrationBuilder.DropForeignKey(
                name: "FK_exercise_muscle_group_muscle_groups_muscle_group_id",
                table: "exercise_muscle_group");

            migrationBuilder.DropPrimaryKey(
                name: "PK_exercise_muscle_group",
                table: "exercise_muscle_group");

            migrationBuilder.RenameTable(
                name: "exercise_muscle_group",
                newName: "exercise_muscle_groups");

            migrationBuilder.RenameIndex(
                name: "IX_exercise_muscle_group_muscle_group_id",
                table: "exercise_muscle_groups",
                newName: "IX_exercise_muscle_groups_muscle_group_id");

            migrationBuilder.RenameIndex(
                name: "IX_exercise_muscle_group_exercise_id",
                table: "exercise_muscle_groups",
                newName: "IX_exercise_muscle_groups_exercise_id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_exercise_muscle_groups",
                table: "exercise_muscle_groups",
                column: "exercise_muscle_group_id");

            migrationBuilder.AddForeignKey(
                name: "FK_exercise_muscle_groups_exercises_exercise_id",
                table: "exercise_muscle_groups",
                column: "exercise_id",
                principalTable: "exercises",
                principalColumn: "exercise_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_exercise_muscle_groups_muscle_groups_muscle_group_id",
                table: "exercise_muscle_groups",
                column: "muscle_group_id",
                principalTable: "muscle_groups",
                principalColumn: "muscle_group_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_exercise_muscle_groups_exercises_exercise_id",
                table: "exercise_muscle_groups");

            migrationBuilder.DropForeignKey(
                name: "FK_exercise_muscle_groups_muscle_groups_muscle_group_id",
                table: "exercise_muscle_groups");

            migrationBuilder.DropPrimaryKey(
                name: "PK_exercise_muscle_groups",
                table: "exercise_muscle_groups");

            migrationBuilder.RenameTable(
                name: "exercise_muscle_groups",
                newName: "exercise_muscle_group");

            migrationBuilder.RenameIndex(
                name: "IX_exercise_muscle_groups_muscle_group_id",
                table: "exercise_muscle_group",
                newName: "IX_exercise_muscle_group_muscle_group_id");

            migrationBuilder.RenameIndex(
                name: "IX_exercise_muscle_groups_exercise_id",
                table: "exercise_muscle_group",
                newName: "IX_exercise_muscle_group_exercise_id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_exercise_muscle_group",
                table: "exercise_muscle_group",
                column: "exercise_muscle_group_id");

            migrationBuilder.AddForeignKey(
                name: "FK_exercise_muscle_group_exercises_exercise_id",
                table: "exercise_muscle_group",
                column: "exercise_id",
                principalTable: "exercises",
                principalColumn: "exercise_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_exercise_muscle_group_muscle_groups_muscle_group_id",
                table: "exercise_muscle_group",
                column: "muscle_group_id",
                principalTable: "muscle_groups",
                principalColumn: "muscle_group_id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
