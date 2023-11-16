from django.utils import timezone
from django.shortcuts import redirect, render
from django.views import View
from .forms import LibroForm
from librosapp.models import Libros





class LibroList(View):

    def get(self, request):
        form=LibroForm()
        libro = Libros.objects.all()
        return render(request, 'librosapp/librosapp.html', {'libro': libro, 'form': form})
    
    def post(self, request):
        form=LibroForm(request.POST)
        if form.is_valid():
            form.save()

            return redirect('libro_list')
        libro = Libros.objects.all()
        return render(request, 'librosapp/librosapp.html', {'libro': libro, 'form': form})
    

class DetalleLibro(View):

    def get(self, request):
        return render(request, 'librosapp/detalleLibro.html')
    
class TodosComentarios(View):

    def get(self, request):
        libros = Libros.objects.all()
        return render(request, 'librosapp/editarLibros.html', {'comentarios': libros})

    

    
def libro_list(request):

    libro = Libros.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'comentarios/comentario_list.html', {'libro': libro})
