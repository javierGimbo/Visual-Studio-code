from datetime import *
from django.utils import timezone
from django.shortcuts import render
from .models import Task

def proyecttask_list(request):

    task = Task.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    return render(request, 'proyecttask/proyecttask_list.html', {'task': task})   