# Generated by Django 4.0.5 on 2022-07-25 13:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0011_update_update_date'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Update',
            new_name='OrderUpdate',
        ),
    ]