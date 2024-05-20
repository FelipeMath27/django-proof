from django.urls import path
from .views import create_savings_account, get_savings_accounts, get_balance_accout,deposit_savings_account, withdraw_account

urlpatterns = [
    path('create_savings_account/', create_savings_account, name='create_savings_account'),
    path('get_savings_account/<str:email>', get_savings_accounts, name='get_savings_accounts'),
    path('get_balance_accout/<str:account_number>', get_balance_accout, name='get_balance_accout'),
    path('deposit_savings_account/<str:account_number>', deposit_savings_account, name='deposit_savings_account'),
    path('withdraw_account/<str:account_number>', withdraw_account, name='withdraw_account'),
]