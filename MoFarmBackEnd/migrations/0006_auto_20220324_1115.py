# Generated by Django 3.0.5 on 2022-03-24 11:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MoFarmBackEnd', '0005_auto_20220323_1519'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='mofarmmodel',
            name='desc',
        ),
        migrations.RemoveField(
            model_name='mofarmmodel',
            name='moduleid',
        ),
        migrations.AddField(
            model_name='mofarmproject',
            name='origin_config_path',
            field=models.CharField(default='', max_length=200, verbose_name='前端源配置jason文件路径'),
        ),
        migrations.AlterField(
            model_name='mofarmdataset',
            name='created_time',
            field=models.DateTimeField(default='2022-03-24 11:15:18'),
        ),
        migrations.AlterField(
            model_name='mofarmdataset',
            name='name',
            field=models.CharField(max_length=100, unique=True, verbose_name='数据集名称'),
        ),
        migrations.AlterField(
            model_name='mofarmdataset',
            name='updated_time',
            field=models.DateTimeField(default='2022-03-24 11:15:18'),
        ),
        migrations.AlterField(
            model_name='mofarmproject',
            name='created_time',
            field=models.DateTimeField(default='2022-03-24 11:15:18'),
        ),
        migrations.AlterField(
            model_name='mofarmproject',
            name='updated_time',
            field=models.DateTimeField(default='2022-03-24 11:15:18', verbose_name='更新时间'),
        ),
    ]
