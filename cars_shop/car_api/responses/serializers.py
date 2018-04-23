from rest_framework import serializers
from .models import Car, Cart, UserCars


class CarSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Car
    fields = "__all__"

class CartSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = Cart
    fields = "__all__"

class UserCarsSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = UserCars
    fields = "__all__"
