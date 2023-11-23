from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.


class Usuario(AbstractUser):
    dni= models.CharField(max_length=10)
    direccion= models.TextField()
    telefono= models.IntegerField()
    def __str__(self):
        return self.dni
'''    
class Libro(models.Model):
    titulo= models.CharField()
    autor= models.CharField()
    editorial= models.TextField()
    fechaPublicacion= models.DateField()
    genero= models.CharField()
    isbn= models.IntegerField()
    resumen= models.TextField()
'''

#comentario