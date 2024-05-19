from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Client,Password
from .serializer import ClientSerializer,PasswordSerializer
from django.http import HttpRequest, HttpResponse

class CreateClienteView(generics.RetrieveDestroyAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class CreatePasswordView(generics.RetrieveDestroyAPIView):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer