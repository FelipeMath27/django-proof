from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import SavingsAccount
from ClientApp.models import Client
from datetime import date
import uuid

@api_view(['POST'])
def create_savings_account(request):
    if request.method == 'POST':
        data = request.data
        email = data.get('email')
        amount_balance = data.get('amount_balance')

        if email and amount_balance:
            try:
                # Buscar al cliente por su email
                client = Client.objects.get(str_email_client=email)
                # Generar un número de cuenta único utilizando UUID
                account_number = str(uuid.uuid4())
                # Crear una nueva cuenta de ahorro para el cliente
                savings_account = SavingsAccount.objects.create(
                    num_id_client=client,
                    num_amount_balance=amount_balance,
                    dtm_open_account=date.today(),
                    str_number_account=account_number
                )
                savings_account.save()
                return Response({'message': 'Savings account created successfully'}, status=status.HTTP_201_CREATED)
            except Client.DoesNotExist:
                return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Email and initial balance are required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
