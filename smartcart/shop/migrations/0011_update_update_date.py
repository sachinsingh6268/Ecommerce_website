# Generated by Django 4.0.5 on 2022-07-25 13:43

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0010_update'),
    ]

    operations = [
        migrations.AddField(
            model_name='update',
            name='update_date',
            field=models.DateField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
