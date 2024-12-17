from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth import authenticate
from django.contrib.auth import logout


# Create your views here.

class ReactAccountView(APIView):
    
    #permission_classes = [IsAuthenticated]

    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def post(self, request):
        action = request.data.get('action')
        print("Action: ", action)
        if action == 'register':
            serializer = UserSerializer(data=request.data)

            if serializer.is_valid():
                serializer.save()
                return Response({"message": "User created successfully!"}, status=status.HTTP_201_CREATED)
        
        elif action == 'login':
            
            username = request.data.get('username')
            password = request.data.get('password')
            user = authenticate(username=username, password=password)
  
            if user:
                return Response({"message": "Login successful", "user_username": user.username}, status=status.HTTP_200_OK)
            
            return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
        
        elif action == "logout":
            logout(request)
            return Response({"message": "Successfully logged out"}, status=200)
        return Response({"error": "Invalid action"}, status=status.HTTP_400_BAD_REQUEST)        
        
        
    
# test



