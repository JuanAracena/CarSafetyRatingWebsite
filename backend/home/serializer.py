from rest_framework import serializers
from . models import *

class BookmarksSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bookmarks
        fields = ['modelyear', 'make', 'frontcrashdr', 'frontcrashpr', 'sidecrashdr', 'sidecrashpr', 'rolloverrisk', 'overallrating', 'vehicledescription', 'model']

    def create(self, validated_data):
        return Bookmarks.objects.create(**validated_data)