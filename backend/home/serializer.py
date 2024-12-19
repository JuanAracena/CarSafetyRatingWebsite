from rest_framework import serializers
from . models import *

class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ['modelyear', 'make', 'frontcrashdr', 'frontcrashpr', 'sidecrashdr', 'sidecrashpr', 'rolloverrisk', 'overallrating', 'model', 'likesnum', 'vehicledescription']

    def create(self, validated_data):
        validated_data['likesnum'] = validated_data.get('likesnum', 0) + 1
        return Likes.objects.create(**validated_data)