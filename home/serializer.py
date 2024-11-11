from rest_framework import serializers
from . models import *

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = ['modelyear', 'make', 'model', 'vehicletype', 'drivetrain', 'curbweight', 'frontbarrierdriversr', 'frontbarrierpassengersr', 'sidebarrierrearseatsr', 'sidebarrierfrontseatsr', 'rolloverrisk']


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ['username', 'password']
    

class BookmarksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmarks
        fields = ['bookmark_id', 'username', 'modelyear', 'model', 'make']