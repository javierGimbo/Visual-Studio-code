from django.urls import path
from . import views

urlpatterns = [
    path('', views.proyecttask_list, name='proyecttask_list'),
]