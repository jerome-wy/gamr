# Generated by Django 3.2.12 on 2022-02-11 16:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('gamr', '0002_platform_genres'),
    ]

    operations = [
        migrations.AddField(
            model_name='game',
            name='genre',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='games', to='gamr.genre'),
        ),
        migrations.AddField(
            model_name='game',
            name='platform',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='games', to='gamr.platform'),
        ),
    ]