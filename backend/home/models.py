from django.db import models

# Create your models here.
class Car(models.Model):
    modelyear = models.IntegerField(primary_key=True)  # The composite primary key (modelyear, make, model) found, that is not supported. The first column is selected.   
    make = models.CharField(unique=True, max_length=30)
    model = models.CharField(unique=True, max_length=100)
    vehicletype = models.CharField(max_length=10, blank=True, null=True)
    drivetrain = models.CharField(max_length=3, blank=True, null=True)
    curbweight = models.IntegerField(blank=True, null=True)
    frontbarrierdriversr = models.IntegerField(blank=True, null=True)
    frontbarrierpassengersr = models.IntegerField(blank=True, null=True)
    sidebarrierrearseatsr = models.IntegerField(blank=True, null=True)
    sidebarrierfrontseatsr = models.IntegerField(blank=True, null=True)
    rolloverrisk = models.FloatField(blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'car'
        unique_together = (('modelyear', 'make', 'model'),)


class Users(models.Model):
    username = models.CharField(primary_key=True, max_length=50)
    password = models.CharField(max_length=20, blank=True, null=True)

    class Meta:
        managed = False
        db_table = 'users'


class Bookmarks(models.Model):
    bookmark_id = models.IntegerField(primary_key=True)  # The composite primary key (bookmark_id, username, model, modelyear, make) found, that is not supported. The first column is selected.
    username = models.ForeignKey(Users, models.DO_NOTHING, db_column='username')
    modelyear = models.ForeignKey(Car, models.DO_NOTHING, db_column='modelyear')     
    model = models.ForeignKey(Car, models.DO_NOTHING, db_column='model', to_field='model', related_name='bookmarks_model_set')
    make = models.ForeignKey(Car, models.DO_NOTHING, db_column='make', to_field='make', related_name='bookmarks_make_set')

    class Meta:
        managed = False
        db_table = 'bookmarks'
        unique_together = (('bookmark_id', 'username', 'model', 'modelyear', 'make'),)



