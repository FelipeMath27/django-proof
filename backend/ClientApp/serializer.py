from rest_framework import serializers
from .models import Client,Password

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model=Client
        fields = '__all__'

class PasswordSerializer(serializers.ModelSerializer):
    class Meta:
        model=Password
        fields = '__all__'

        