from django.urls import path, include
from rest_framework import routers
from ClientApp import views

router=routers.DefaultRouter()
router.register(r'client', views.ClienteView)


urlpatterns = [
    path('', include(router.urls)),
    path('create_password/', views.create_password, name='create_password'),
    path('login_client/', views.clientSignIn, name='clientSignIn'),
]