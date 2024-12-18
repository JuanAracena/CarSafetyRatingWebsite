# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey and OneToOneField has `on_delete` set to the desired behavior
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from django.db import models
from django.contrib.auth.models import User


class Likes(models.Model):
    modelyear = models.IntegerField(blank=True, null=True)
    make = models.CharField(max_length=30, blank=True, null=True)
    frontcrashdr = models.CharField(max_length=9, blank=True, null=True)
    frontcrashpr = models.CharField(max_length=9, blank=True, null=True)
    sidecrashdr = models.CharField(max_length=9, blank=True, null=True)
    sidecrashpr = models.CharField(max_length=9, blank=True, null=True)
    rolloverrisk = models.DecimalField(max_digits=3, decimal_places=0, blank=True, null=True)
    overallrating = models.CharField(max_length=9, blank=True, null=True)
    model = models.CharField(max_length=100, blank=True, null=True)
    likesnum = models.IntegerField(blank=True, null=True)
    vehicledescription = models.CharField(max_length=200, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'likes'