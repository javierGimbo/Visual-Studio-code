from datetime import *
from django.utils import timezone
from django.shortcuts import render, redirect
from .models import Task
from .form import TaskForm

def proyecttask_list(request):

    task = Task.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    if request.method == 'POST':
        form=TaskForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('proyecttask_list')
    else:
        form=TaskForm()

    return render(request, 'proyecttask/proyecttask_list.html', {'task': task, 'form':form})   