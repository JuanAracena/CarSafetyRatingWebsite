from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from . models import *
from . serializer import *


# Create your views here.

class ReactAccountView(APIView):
    def get(self, request):

        output = [{'username': output.username,
                   'password': output.password}
                   for output in Users.objects.all()]
        return Response(output)
    
    def post(self, request):
        serializer = UsersSerializer(data=request.data)
        
        if serializer.is_valid(raise_exception=True):
            user = serializer.validated_data['user']

            return Response({"message": "Login successful", "user_id": user.username}, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
    




