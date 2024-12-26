from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import status




# Create your views here.

class ReactWelcomeView(APIView):


    def get(self, request):
        output = Likes.objects.all()
        serializers = LikesSerializer(output, many=True)
        return Response(serializers.data, status=status.HTTP_200_OK)
    
    def post(self, request):

        requestVd = request.data
        
        if (Likes.objects.filter(vehicledescription=requestVd['vehicledescription']).exists() == True):
        
            try:
                obj = Likes.objects.get(vehicledescription=requestVd['vehicledescription'])
            except Likes.DoesNotExist:
                return Response({"error": "Item not found"}, status=status.HTTP_404_NOT_FOUND)

            obj.likesnum += 1
            obj.save()

            updateSerializer = LikesSerializer(obj)
            return Response(updateSerializer.data, status=status.HTTP_200_OK)
        
        
        
        serializer = LikesSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({"error": "Invalid action"}, status=status.HTTP_400_BAD_REQUEST)        


def welcome(request):
    return render(request, 'home/welcome.html')
