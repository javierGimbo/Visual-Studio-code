from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator
from django.db import models


class Libros(models.Model):
    titulo = models.CharField(max_length=150)
    autor = models.ForeignKey(User, on_delete=models.CASCADE)
    comentario = models.CharField(max_length=150)
    rating = models.PositiveIntegerField(validators=[MaxValueValidator(5)])
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.titulo