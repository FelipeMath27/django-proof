from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializer import ClientSerializer,PasswordSerializer
from .models import Client,Password
from django.http import HttpRequest, HttpResponse
from rest_framework.response import Response
from rest_framework import status

class ClienteView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class PasswordView(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer

def hiWorld(HttpRequest):
    return HttpResponse("Hello World!")