﻿// <auto-generated />
using System;
using GymTracker.Infra.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace GymTracker.Infra.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "8.0.6")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            NpgsqlModelBuilderExtensions.UseIdentityByDefaultColumns(modelBuilder);

            modelBuilder.Entity("GymTracker.Domain.Entities.MuscleGroup", b =>
                {
                    b.Property<Guid>("MucleGroupId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("uuid")
                        .HasColumnName("muscle_group_id");

                    b.Property<string>("GroupName")
                        .IsRequired()
                        .HasColumnType("text")
                        .HasColumnName("group_name");

                    b.Property<string>("MuscleImage")
                        .HasColumnType("text")
                        .HasColumnName("muscle_image");

                    b.HasKey("MucleGroupId");

                    b.HasIndex("GroupName")
                        .IsUnique();

                    b.ToTable("muscle_groups");
                });
#pragma warning restore 612, 618
        }
    }
}
