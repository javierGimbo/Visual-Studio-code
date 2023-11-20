from .models import Libros
from django import forms

class LibroForm(forms.ModelForm):

    class Meta:
        model = Libros
        fields = ['titulo', 'autor', 'comentario']