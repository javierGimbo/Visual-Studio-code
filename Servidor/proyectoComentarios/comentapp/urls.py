from django.urls import path
from . import views
from .views import ComentList

urlpatterns = [
    path('', ComentList.as_view(), name='comentapp'),
]