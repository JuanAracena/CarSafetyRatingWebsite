from django.db import models

# Create your models here.

class Users(models.Model):
    username = models.CharField(primary_key=True, max_length=50)
    password = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'