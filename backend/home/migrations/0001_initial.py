# Generated by Django 5.1.3 on 2024-12-23 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Likes',
            fields=[
                ('modelyear', models.IntegerField()),
                ('make', models.CharField(max_length=30)),
                ('frontcrashdr', models.CharField(blank=True, max_length=9, null=True)),
                ('frontcrashpr', models.CharField(blank=True, max_length=9, null=True)),
                ('sidecrashdr', models.CharField(blank=True, max_length=9, null=True)),
                ('sidecrashpr', models.CharField(blank=True, max_length=9, null=True)),
                ('rolloverrisk', models.DecimalField(blank=True, decimal_places=3, max_digits=3, null=True)),
                ('overallrating', models.CharField(blank=True, max_length=9, null=True)),
                ('model', models.CharField(max_length=100)),
                ('likesnum', models.IntegerField(blank=True, null=True)),
                ('vehicledescription', models.CharField(max_length=200, primary_key=True, serialize=False)),
            ],
            options={
                'db_table': 'likes',
            },
        ),
    ]
