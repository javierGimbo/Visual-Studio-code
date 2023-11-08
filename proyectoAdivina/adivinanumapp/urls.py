from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='adivina'),
    path('guess', views.guess, name='guess'),
]
