from django.urls import path
from .views import create_savings_account, get_savings_accounts

urlpatterns = [
    path('create_savings_account/', create_savings_account, name='create_savings_account'),
    path('get_savings_account/<str:email>', get_savings_accounts, name='get_savings_accounts'),
]