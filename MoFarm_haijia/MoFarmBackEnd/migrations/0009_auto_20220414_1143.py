# Generated by Django 3.2.10 on 2022-04-14 11:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MoFarmBackEnd', '0008_auto_20220414_1126'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mofarmdataset',
            name='created_time',
            field=models.DateTimeField(default='2022-04-14 11:43:56'),
        ),
        migrations.AlterField(
            model_name='mofarmdataset',
            name='updated_time',
            field=models.DateTimeField(default='2022-04-14 11:43:56'),
        ),
        migrations.AlterField(
            model_name='mofarmproject',
            name='created_time',
            field=models.DateTimeField(default='2022-04-14 11:43:56'),
        ),
        migrations.AlterField(
            model_name='mofarmproject',
            name='updated_time',
            field=models.DateTimeField(default='2022-04-14 11:43:56', verbose_name='更新时间'),
        ),
    ]
