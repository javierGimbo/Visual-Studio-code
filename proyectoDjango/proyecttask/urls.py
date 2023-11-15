from django.urls import path
from . import views
from .views import ProyecttaskList

urlpatterns = [
    path('', ProyecttaskList.as_view(), name='proyecttask_list'),
    path('Task/<int:pk>/', views.proyecttask_num, name='proyecttask_num'),
    path('proyecttask_new', views.proyecttask_new, name='proyecttask_new'),
   
   
   
]