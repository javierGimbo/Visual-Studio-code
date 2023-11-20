from django.utils import timezone
from django.shortcuts import redirect, render
from django.views import View
from .forms import ComentarioForm
from .models import Comentario



class ComentarioList(View): 
    def get(self, request):
        form=ComentarioForm()
        comentario = Comentario.objects.all()
        return render(request, 'comentarios/comentario_list.html', {'comentario': comentario, 'form': form})
    
    def post(self, request):
        form=ComentarioForm(request.POST)
        if form.is_valid():
            form.save()

            return redirect('confirmacion')
       
        return render(request, 'comentarios/comentario_list.html', {'form': form})
    
    '''palabra View lo paso a la url como vista '''

class Confirmacion(View):

    def get(self, request):
        return render(request, 'comentarios/confirmacion.html')


class TodosComentarios(View):

    def get(self, request):
        comentarios = Comentario.objects.all()
        return render(request, 'comentarios/todos_comentarios.html', {'comentarios': comentarios})
    
