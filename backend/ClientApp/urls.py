from django.urls import path
from .views import CreateClienteView, CreatePasswordView

urlpatterns = [
    path('createClient/', CreateClienteView.as_view(), name='create-client'),
    path('createPassword/', CreatePasswordView.as_view(), name='create-password'),
]