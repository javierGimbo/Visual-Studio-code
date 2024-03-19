# Generated by Django 3.2.25 on 2024-03-19 08:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Estudiante',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.TextField(max_length=20)),
                ('apellido', models.TextField()),
                ('edad', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Materia',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.TextField(max_length=20)),
                ('siglas', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='Nota',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('calificacion', models.IntegerField()),
                ('estudiante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notasapp.estudiante')),
                ('materia', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='notasapp.materia')),
            ],
        ),
    ]
