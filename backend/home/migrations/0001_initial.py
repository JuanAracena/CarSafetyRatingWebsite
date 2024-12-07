# Generated by Django 5.1.3 on 2024-12-07 00:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Bookmarks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelyear', models.IntegerField(blank=True, null=True)),
                ('make', models.CharField(blank=True, max_length=30, null=True)),
                ('frontcrashdr', models.CharField(blank=True, max_length=9, null=True)),
                ('frontcrashpr', models.CharField(blank=True, max_length=9, null=True)),
                ('sidecrashdr', models.CharField(blank=True, max_length=9, null=True)),
                ('sidecrashpr', models.CharField(blank=True, max_length=9, null=True)),
                ('rolloverrisk', models.DecimalField(blank=True, decimal_places=0, max_digits=3, null=True)),
                ('overallrating', models.CharField(blank=True, max_length=9, null=True)),
            ],
            options={
                'db_table': 'bookmarks',
                'managed': False,
            },
        ),
    ]
