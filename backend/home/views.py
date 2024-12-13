from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.views import APIView
from . models import *
from . serializer import *
from rest_framework.response import Response
from rest_framework import status




# Create your views here.

class ReactWelcomeView(APIView):

    # serializer_class = CarSerializer

    def get(self, request):
        # output = [{'make': output.make,
        #            'model': output.model}
        #            for output in Car.objects.all()]
        # return Response(output)

        output = Bookmarks.objects.all()
        return Response(output)
    
    def post(self, request):
        # serializer = CarSerializer(data=request.data)
        # if serializer.is_valid(raise_exception=True):
        #     serializer.save()
        #     return Response(serializer.data)
        serializer = BookmarksSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save()
            return Response(serializer.data)

        return Response({"error": "Invalid action"}, status=status.HTTP_400_BAD_REQUEST)        


def welcome(request):
    return render(request, 'home/welcome.html')
