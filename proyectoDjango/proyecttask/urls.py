from django.urls import path
from . import views
from .views import proyecttask_list

urlpatterns = [
    path('', views.proyecttask_list, name='proyecttask_list'),
]