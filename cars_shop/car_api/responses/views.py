from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser
from .models import Car, Cart
from .serializers import CarSerializer, CartSerializer, UserCarsSerializer


from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.models import User
from django.contrib.auth import *
from django.contrib.auth.forms import UserCreationForm

# Create your views here.
@csrf_exempt
def car(request):
	if request.method == "GET":
	    car = Car.objects.all()
	    ser = CarSerializer(car, many=True)
	    return JsonResponse(ser.data, safe=False)


@csrf_exempt
def cart(request):
	if request.method == "GET":
	    cart = Cart.objects.all()
	    ser = CartSerializer(cart, many=True)
	    return JsonResponse(ser.data, safe=False)



@csrf_exempt
def user_login(request):
    if request.POST:
        username = password = ''
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)
        print (user)
        if user is not None and user.is_active:
            print("User Login:  Username:" + username + '    Password:' + password)
            login(request, user)
            return JsonResponse({'output' : request.user.username})
        else:
            return JsonResponse({'output' : "Username or Password wrong!"})
    else:
        return JsonResponse({'output' : "404.html"})

@csrf_exempt
def user_register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        print (form)
        if form.is_valid():
            new_user = form.save()
            return JsonResponse(new_user)
        else:
            return HttpResponse("errpr")
    else:
        return HttpResponse("404.html")

@csrf_exempt
def profile_register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        print (form)
        if form.is_valid():
            new_user = form.save()
            return JsonResponse(new_user)
        else:
            return HttpResponse("errpr")
    else:
        return HttpResponse("404.html")


@csrf_exempt
def user_cars(request, user_id):
  try:
    carIds = UserCars.objects.filter(user_id=user_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  array = (carIds.values_list('car_id', flat=True))
  UserCarsList = Car.objects.filter(id__in=array)
  if request.method == "GET":
    ser = CarSerializer(UserCarsList, many=True)
    return JsonResponse(ser.data, safe=False)
 
@csrf_exempt
def car_add(request):
    if request.method == 'POST':
      data = JSONParser().parse(request)
      print (data)
      ser = UserCarsSerializer(data=data)
      if ser.is_valid():
        ser.save()
        return JsonResponse(ser.data, status=201)
      return JsonResponse(ser.errors, status=400)