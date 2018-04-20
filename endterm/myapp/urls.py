from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name="index"),
    path('blogs/', views.blogs_list, name="blog_list"),
    path('blogs/<int:blog_id>', views.blogs_details, name="blog_details")
    
]