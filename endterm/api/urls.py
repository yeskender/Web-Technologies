from django.conf.urls import url
from django.urls import path
from . import views

urlpatterns = [
    path('todo/', views.todo_list, name = "todo_list"),
    path('todo/<int:todo_id>/', views.todo_details, name='todo_details'),
]
