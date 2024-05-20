from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from utils.utils import HashPassword
from .models import Admin

@api_view(['POST'])
def signIn(request):
    if request.method == 'POST':
        data = request.data
        username = data.get('username')
        password = data.get('password')

        if username and password:
            hashed_password = HashPassword(password)  # Cifrar la contraseña
            try:
                user = Admin.objects.get(str_user_admin=username, str_pasw=hashed_password)
                return Response({'message': 'Login successful', 'user_id': user.num_id_admin})
            except Admin.DoesNotExist:
                return Response({'error': 'Invalid username or password'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Username and password are required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)

@api_view(['POST'])
def signOut(request):
    if request.method == 'POST':
        # Aquí se implementaría la lógica para invalidar el token del usuario o cerrar la sesión
        return Response({'message': 'Logout successful'}, status=status.HTTP_200_OK)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)