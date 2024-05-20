from django.urls import path
from .views import create_savings_account

urlpatterns = [
    path('create_savings_account/', create_savings_account, name='create_savings_account'),
]