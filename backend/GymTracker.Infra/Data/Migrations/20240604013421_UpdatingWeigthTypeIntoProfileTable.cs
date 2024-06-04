using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    /// <inheritdoc />
    public partial class UpdatingWeigthTypeIntoProfileTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "weight",
                table: "profile_histories",
                type: "numeric(5,2)",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "real");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<float>(
                name: "weight",
                table: "profile_histories",
                type: "real",
                nullable: false,
                oldClrType: typeof(float),
                oldType: "numeric(5,2)");
        }
    }
}
