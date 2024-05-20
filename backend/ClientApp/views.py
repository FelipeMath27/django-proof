from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets
from .serializer import ClientSerializer,PasswordSerializer
from .models import Client,Password
from django.http import HttpRequest, HttpResponse
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from utils.utils import HashPassword

class ClienteView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

class PasswordView(viewsets.ModelViewSet):
    queryset = Password.objects.all()
    serializer_class = PasswordSerializer

def hiWorld(HttpRequest):
    return HttpResponse("Hello World!")


@api_view(['POST'])
def create_password(request):
    if request.method == 'POST':
        email = request.data.get('email')
        new_password = request.data.get('new_password')

        if not new_password:
            return Response({'error': 'New password is required'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            client = Client.objects.get(str_email_client=email)
            
            existing_password = Password.objects.filter(num_id_client=client).exists()
            if existing_password:
                return Response({'error': 'Client already has a password'}, status=status.HTTP_400_BAD_REQUEST)

            hashed_password = HashPassword(new_password)
            password = Password.objects.create(num_id_client=client, str_paswrd_client=hashed_password)
            password.save()

            serializer = PasswordSerializer(password)
            return Response(serializer.data, status=status.HTTP_201_CREATED)

        except Client.DoesNotExist:
            return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)

    return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def clientSignIn(request):
    if request.method == 'POST':
        data = request.data
        email = data.get('email')
        password = data.get('password')

        if email and password:
            client = Client.get_by_email(email)
            if client:
                try:
                    # Buscar la contraseña asociada al cliente
                    client_password = Password.objects.get(num_id_client=client, str_paswrd_client=HashPassword(password))
                    return Response({'message': 'Login successful', 'client_id': client.num_id_client})
                except Password.DoesNotExist:
                    return Response({'error': 'Invalid email or password'}, status=status.HTTP_401_UNAUTHORIZED)
            else:
                return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def clientSignOut(request):
    if request.method == 'POST':
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

