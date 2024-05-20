from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import SavingsAccount
from ClientApp.models import Client
from datetime import date
import uuid
import random

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

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import SavingsAccount
from ClientApp.models import Client

@api_view(['GET'])
def get_savings_accounts(request, email):
    try:
        client = Client.objects.get(str_email_client=email)
        
        client_id = client.num_id_client
        
        savings_accounts = SavingsAccount.objects.filter(num_id_client=client_id)

        response_data = []
        for account in savings_accounts:
            account_info = {
                'num_id_account': account.num_id_account,
                'str_number_account': account.str_number_account,
                'dtm_open_account': account.dtm_open_account
            }
            response_data.append(account_info)

        return Response(response_data, status=status.HTTP_200_OK)
    
    except Client.DoesNotExist:
        return Response({'error': 'Client not found'}, status=status.HTTP_404_NOT_FOUND)
    
@api_view(['GET'])
def get_balance_accout(request, account_number):
    if request.method == 'GET':
        if account_number:
            try:
                account = SavingsAccount.objects.get(str_number_account=account_number)
                balance = account.num_amount_balance
                return Response({'balance' : balance}, status=status.HTTP_200_OK)
            except SavingsAccount.DoesNotExist:
                return Response({'error: Savigs account not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error:Account id is required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error: Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
@api_view(['PATCH'])
def deposit_savings_account(request, account_number):
    if request.method == 'PATCH':
        if account_number:
            try:
                account = SavingsAccount.objects.get(str_number_account=account_number)
                deposit = request.data.get('deposit')

                if deposit and deposit > 10000:
                    account.num_amount_balance += deposit
                    account.save()
                    return Response({'message': 'Deposit successful'}, status=status.HTTP_200_OK)
                else:
                     return Response({'error': 'Invalid deposit amount'}, status=status.HTTP_400_BAD_REQUEST)
            except SavingsAccount.DoesNotExist:
                return Response({'error: Savings account not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error: Account number is required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error: Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
    
@api_view(['PATCH'])
def withdraw_account(request, account_number):
    if request.method == 'PATCH':
        if account_number:
            try:
                account = SavingsAccount.objects.get(str_number_account=account_number)
                withdraw = request.data.get('withdraw')

                if withdraw and withdraw < account.num_amount_balance - 10000:
                    account.num_amount_balance -= withdraw
                    account.save()

                    verificate_code = random.randint(100000,999999)
                
                    return Response({'message': 'Withdrawal successful', 'verificate_code': verificate_code}, status=status.HTTP_200_OK)
                else:
                    return Response({'error': 'Insufficient funds or invalid withdrawal amount'}, status=status.HTTP_400_BAD_REQUEST)
            
            except SavingsAccount.DoesNotExist:
                return Response({'error': 'Savings account not found'}, status=status.HTTP_404_NOT_FOUND)
        else:
            return Response({'error': 'Account number is required'}, status=status.HTTP_400_BAD_REQUEST)
    else:
        return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)