# Generated by Django 2.0.4 on 2018-04-20 22:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('responses', '0002_cart'),
    ]

    operations = [
        migrations.CreateModel(
            name='UserCars',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('user_id', models.IntegerField(default=0)),
                ('car_id', models.IntegerField(default=0)),
            ],
        ),
    ]