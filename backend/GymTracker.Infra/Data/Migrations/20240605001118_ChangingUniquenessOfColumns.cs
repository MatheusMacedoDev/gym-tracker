using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    /// <inheritdoc />
    public partial class ChangingUniquenessOfColumns : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_default_workouts_workout_name",
                table: "default_workouts");

            migrationBuilder.CreateIndex(
                name: "IX_users_email",
                table: "users",
                column: "email",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropIndex(
                name: "IX_users_email",
                table: "users");

            migrationBuilder.CreateIndex(
                name: "IX_default_workouts_workout_name",
                table: "default_workouts",
                column: "workout_name",
                unique: true);
        }
    }
}
