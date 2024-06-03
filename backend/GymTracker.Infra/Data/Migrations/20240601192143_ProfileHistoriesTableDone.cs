using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    /// <inheritdoc />
    public partial class ProfileHistoriesTableDone : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "profile_histories",
                columns: table => new
                {
                    profile_history_id = table.Column<Guid>(type: "uuid", nullable: false),
                    date = table.Column<DateTime>(type: "timestamp with time zone", nullable: false),
                    weight = table.Column<float>(type: "real", nullable: false),
                    height = table.Column<short>(type: "smallint", nullable: false),
                    abdominal_girth = table.Column<float>(type: "numeric(4,1)", nullable: true),
                    scapular_girth = table.Column<float>(type: "numeric(4,1)", nullable: true),
                    hip_girth = table.Column<float>(type: "numeric(4,1)", nullable: true),
                    arm_girth = table.Column<float>(type: "numeric(4,1)", nullable: true),
                    leg_girth = table.Column<float>(type: "numeric(4,1)", nullable: true),
                    body_fat = table.Column<float>(type: "numeric(4,3)", nullable: true),
                    evolution_photo = table.Column<string>(type: "text", nullable: true),
                    user_id = table.Column<Guid>(type: "uuid", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_profile_histories", x => x.profile_history_id);
                    table.ForeignKey(
                        name: "FK_profile_histories_users_user_id",
                        column: x => x.user_id,
                        principalTable: "users",
                        principalColumn: "user_id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_profile_histories_user_id",
                table: "profile_histories",
                column: "user_id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "profile_histories");
        }
    }
}
