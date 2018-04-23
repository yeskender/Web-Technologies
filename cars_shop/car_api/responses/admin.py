from django.contrib import admin
from .models import Car, Cart, UserCars

# Register your models here.
admin.site.register(Car)
admin.site.register(Cart)
admin.site.register(UserCars)
