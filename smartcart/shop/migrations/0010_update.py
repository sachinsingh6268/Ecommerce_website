# Generated by Django 4.0.5 on 2022-07-25 13:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0009_rename_orders_order'),
    ]

    operations = [
        migrations.CreateModel(
            name='Update',
            fields=[
                ('update_id', models.AutoField(primary_key=True, serialize=False)),
                ('orderid', models.IntegerField(default=0)),
                ('update_desc', models.CharField(default='', max_length=5000)),
            ],
        ),
    ]
