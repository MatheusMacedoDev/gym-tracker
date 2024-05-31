using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    /// <inheritdoc />
    public partial class RemainingTablesCreated : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "default_workouts",
                columns: table => new
                {
                    default_workout_id = table.Column<Guid>(type: "uuid", nullable: false),
                    workout_name = table.Column<string>(type: "text", nullable: false),
                    user_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_default_workouts", x => x.default_workout_id);
                    table.ForeignKey(
                        name: "FK_default_workouts_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "exercise_muscle_group",
                columns: table => new
                {
                    exercise_muscle_group_id = table.Column<Guid>(type: "uuid", nullable: false),
                    muscle_group_id = table.Column<Guid>(type: "uuid", nullable: false),
                    exercise_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_exercise_muscle_group", x => x.exercise_muscle_group_id);
                    table.ForeignKey(
                        name: "FK_exercise_muscle_group_exercises_exercise_id",
                        column: x => x.exercise_id,
                        principalTable: "exercises",
                        principalColumn: "exercise_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_exercise_muscle_group_muscle_groups_muscle_group_id",
                        column: x => x.muscle_group_id,
                        principalTable: "muscle_groups",
                        principalColumn: "muscle_group_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "default_exercises",
                columns: table => new
                {
                    default_exercise_id = table.Column<Guid>(type: "uuid", nullable: false),
                    repetitions_range = table.Column<string>(type: "text", nullable: false),
                    series_amount = table.Column<short>(type: "smallint", nullable: false),
                    exercise_id = table.Column<Guid>(type: "uuid", nullable: false),
                    default_workout_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_default_exercises", x => x.default_exercise_id);
                    table.ForeignKey(
                        name: "FK_default_exercises_default_workouts_default_workout_id",
                        column: x => x.default_workout_id,
                        principalTable: "default_workouts",
                        principalColumn: "default_workout_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_default_exercises_exercises_exercise_id",
                        column: x => x.exercise_id,
                        principalTable: "exercises",
                        principalColumn: "exercise_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "diary_workouts",
                columns: table => new
                {
                    diary_workout_id = table.Column<Guid>(type: "uuid", nullable: false),
                    workout_date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    default_workout_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_diary_workouts", x => x.diary_workout_id);
                    table.ForeignKey(
                        name: "FK_diary_workouts_default_workouts_default_workout_id",
                        column: x => x.default_workout_id,
                        principalTable: "default_workouts",
                        principalColumn: "default_workout_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "diary_exercise_series",
                columns: table => new
                {
                    diary_exercise_serie_id = table.Column<Guid>(type: "uuid", nullable: false),
                    serie_number = table.Column<short>(type: "smallint", nullable: false),
                    repetitions = table.Column<short>(type: "smallint", nullable: false),
                    overload = table.Column<short>(type: "smallint", nullable: false),
                    diary_exercise_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_diary_exercise_series", x => x.diary_exercise_serie_id);
                    table.ForeignKey(
                        name: "FK_diary_exercise_series_default_exercises_diary_exercise_id",
                        column: x => x.diary_exercise_id,
                        principalTable: "default_exercises",
                        principalColumn: "default_exercise_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "diary_exercises",
                columns: table => new
                {
                    diary_exercise_id = table.Column<Guid>(type: "uuid", nullable: false),
                    default_exercise_id = table.Column<Guid>(type: "uuid", nullable: false),
                    diary_workout_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_diary_exercises", x => x.diary_exercise_id);
                    table.ForeignKey(
                        name: "FK_diary_exercises_default_exercises_default_exercise_id",
                        column: x => x.default_exercise_id,
                        principalTable: "default_exercises",
                        principalColumn: "default_exercise_id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_diary_exercises_diary_workouts_diary_workout_id",
                        column: x => x.diary_workout_id,
                        principalTable: "diary_workouts",
                        principalColumn: "diary_workout_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_default_exercises_default_workout_id",
                table: "default_exercises",
                column: "default_workout_id");

            migrationBuilder.CreateIndex(
                name: "IX_default_exercises_exercise_id",
                table: "default_exercises",
                column: "exercise_id");

            migrationBuilder.CreateIndex(
                name: "IX_default_workouts_user_id",
                table: "default_workouts",
                column: "user_id");

            migrationBuilder.CreateIndex(
                name: "IX_default_workouts_workout_name",
                table: "default_workouts",
                column: "workout_name",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_diary_exercise_series_diary_exercise_id",
                table: "diary_exercise_series",
                column: "diary_exercise_id");

            migrationBuilder.CreateIndex(
                name: "IX_diary_exercises_default_exercise_id",
                table: "diary_exercises",
                column: "default_exercise_id");

            migrationBuilder.CreateIndex(
                name: "IX_diary_exercises_diary_workout_id",
                table: "diary_exercises",
                column: "diary_workout_id");

            migrationBuilder.CreateIndex(
                name: "IX_diary_workouts_default_workout_id",
                table: "diary_workouts",
                column: "default_workout_id");

            migrationBuilder.CreateIndex(
                name: "IX_exercise_muscle_group_exercise_id",
                table: "exercise_muscle_group",
                column: "exercise_id");

            migrationBuilder.CreateIndex(
                name: "IX_exercise_muscle_group_muscle_group_id",
                table: "exercise_muscle_group",
                column: "muscle_group_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "diary_exercise_series");

            migrationBuilder.DropTable(
                name: "diary_exercises");

            migrationBuilder.DropTable(
                name: "exercise_muscle_group");

            migrationBuilder.DropTable(
                name: "default_exercises");

            migrationBuilder.DropTable(
                name: "diary_workouts");

            migrationBuilder.DropTable(
                name: "default_workouts");
        }
    }
}
