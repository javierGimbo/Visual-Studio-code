from django.urls import path
from . import views
from .views import ProyecttaskList

urlpatterns = [
    path('', ProyecttaskList.as_view(), name='proyecttask_list'),
]