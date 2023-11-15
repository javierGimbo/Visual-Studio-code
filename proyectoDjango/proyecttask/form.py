from django import forms
from .models import Task

'''class TaskForm(forms.ModelForm):
    class Meta:
        model = Task
        fields = ['title', 'text', 'completado']'''


class TaskForm(forms.Form):
    title = forms.CharField(label="title", max_length=200)
    text = forms.CharField(label="text", widget=forms.Textarea)
    completado = forms.BooleanField(label="completado", required=False)
    
