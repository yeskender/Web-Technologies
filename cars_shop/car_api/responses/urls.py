from django.urls import path
from . import views

urlpatterns = [
    path('auth/login/', views.user_login),
    path('auth/join/', views.user_register),
    path('auth/profile/', views.profile_register),
    path('car/', views.car),
    path('cart/', views.cart),
    path('profile/<int:user_id>/', views.user_cars),
    path('profile/carAdd/', views.car_add),
]