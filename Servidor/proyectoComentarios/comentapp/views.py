from django.shortcuts import redirect, render
from django.views import View
from .models import Comentario
from .forms import ComentarioForm

# Create your views here.

class ComentList(View):
    def get(self, request):
        comentarios = ComentarioForm()
        comentario =Comentario.objects.all()
        return render(request, 'comentapp/comentapp.html', {'comentario': comentario, 'form': comentarios})

    def post(self, request):
        comentarios = ComentarioForm(request.POST) 
        if comentarios.is_valid():
            title = comentarios.cleaned_data["title"]
            text = comentarios.cleaned_data["text"]
            completado = comentarios.cleaned_data["completado"]

            Comentario.objects.create(title=title, text=text, completado=completado)
            #form.save()
            return redirect('comentList_list')
        comentario =Comentario.objects.all()
        return render(request, 'comentapp/comentapp.html', {'comentario': Comentario, 'form': comentario})