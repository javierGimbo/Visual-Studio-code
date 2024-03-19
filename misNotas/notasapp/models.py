from django.conf import settings
from django.db import models


# Create your models here.

class Estudiante(models.Model):
    nombre = models.TextField(max_length=20)
    apellido = models.TextField()
    edad = models.IntegerField()

    def __str__(self):
        return self.nombre
    
class Materia(models.Model):
    nombre=models.TextField(max_length=20)
    siglas=models.TextField()

    def __str__(self):
        return self.siglas
    
class Nota(models.Model):
    estudiante = models.ForeignKey("Estudiante", on_delete=models.CASCADE)
    materia = models.ForeignKey("Materia", on_delete=models.CASCADE)
    calificacion = models.IntegerField()

    def __str__(self):
        return self.nombre
