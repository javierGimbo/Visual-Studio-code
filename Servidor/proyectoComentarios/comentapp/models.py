from django.conf import settings
from django.db import models



class Comentario(models.Model):
    nombre = models.CharField(max_length=200)
    correo = models.TextField()
    comentario = models.TextField()


    def __str__(self):
        return self.nombre
    

    '''si se modifica algo hay que hacer el migration'''