from django.db import models

# Create your models here.

class Car(models.Model):
	title = models.CharField(max_length=100)
	cost = models.CharField(max_length=100)
	img_path = models.CharField(max_length=200)
	
class Cart(models.Model):
	title = models.CharField(max_length=100)
	cost = models.CharField(max_length=100)
	img_path = models.CharField(max_length=200)
	
class UserCars(models.Model):
    user_id = models.IntegerField(default=0)
    car_id = models.IntegerField(default=0)