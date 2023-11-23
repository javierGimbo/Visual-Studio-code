from django.contrib.auth.models import AbstractServer
from django.db import models
from django.conf import settings

# Create your models here.


class Usuario(AbstractServer):
    dni= models.CharField(max_length=10)
    direccion= models.TextField()
    telefono= models.IntegerField(max_length=9)


    def __str__(self):
        return self.dni
    
class Libro(models.Model):
    titulo= models.CharField()
    autor= models.CharField()
    editorial= models.TextField()
    fechaPublicacion= models.DateField()
    genero= models.CharField()
    isbn= models.IntegerField()
    resumen= models.TextField()
    disponibilidad= models.TextField()

