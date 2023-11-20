from django.urls import path
from . import views
from .views import ComentarioList, Confirmacion, TodosComentarios

urlpatterns = [
    path('', ComentarioList.as_view(), name='comentario_list'),
    path('confirmacion', Confirmacion.as_view(), name='confirmacion'),
    path('todos_comentarios', TodosComentarios.as_view(), name='todos_comentarios'),

]