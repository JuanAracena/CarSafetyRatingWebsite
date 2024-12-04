from rest_framework import serializers
from . models import *
from django.core.exceptions import ObjectDoesNotExist

class UsersSerializer(serializers.ModelSerializer):

    username = serializers.CharField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        username = data.get('username')
        password = data.get('password')

        # Query the Users model to check if the username exists
        try:
            user = Users.objects.get(username=username)
        except ObjectDoesNotExist:
            raise serializers.ValidationError("Invalid username or password.")
        
        # Compare the passwords
        if user.password != password:
            raise serializers.ValidationError("Invalid username or password.")
        
        # Include the authenticated user
        data['user'] = user
        return data

    class Meta:
        model = Users
        fields = ['username', 'password']
    