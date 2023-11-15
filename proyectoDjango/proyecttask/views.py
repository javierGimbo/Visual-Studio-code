from datetime import *
from django.views import View
from django.utils import timezone
from django.shortcuts import get_object_or_404, render, redirect
from .models import Task
from .form import TaskForm

"""def proyecttask_list(request):

    task = Task.objects.filter(published_date__lte=timezone.now()).order_by('published_date')
    if request.method == 'POST':
        form=TaskForm(request.POST)
        if form.is_valid():
        
            form.save()
            return redirect('proyecttask_list')
    else:
        form=TaskForm()

    return render(request, 'proyecttask/proyecttask_list.html', {'task': task, 'form':form})
"""


class ProyecttaskList(View):
    def get(self, request):
        form = TaskForm()
        tasks =Task.objects.all()
        return render(request, 'proyecttask/proyecttask_list.html', {'tasks': tasks, 'form': form})

    def post(self, request):
        form=TaskForm(request.POST) 
        if form.is_valid():
            title = form.cleaned_data["title"]
            text = form.cleaned_data["text"]
            completado = form.cleaned_data["completado"]

            Task.objects.create(title=title, text=text, completado=completado)
            #form.save()
            return redirect('proyecttask_list')
        tasks =Task.objects.all()
        return render(request, 'proyecttask/proyecttask_list.html', {'tasks': tasks, 'form':form})
    

def proyecttask_num(request,pk):
        tasks= get_object_or_404(Task,pk=pk)
        return render (request, 'proyecttask/proyecttask_num.html', {'tasks':tasks})

def proyecttask_new(request):
        if request.method == 'POST':
            form=TaskForm(request.POST)
            if form.is_valid():
        
                form.save()
            return redirect('proyecttask_list')
        else:
            form=TaskForm()

        return render(request, 'proyecttask/proyecttask_new.html', {'form':form})

