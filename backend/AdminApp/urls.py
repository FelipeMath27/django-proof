from django.urls import path
from .views import signIn, signOut

urlpatterns = [
    path('signin/', signIn, name='signin'),
    path('signout/', signOut, name='signOut'),
]