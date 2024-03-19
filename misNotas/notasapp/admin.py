from django.contrib import admin
from .models import Estudiante
from .models import Nota
from .models import Materia


admin.site.register(Estudiante)
admin.site.register(Nota)
admin.site.register(Materia)
