from django.shortcuts import render
import random

# Create your views here.

def home(request):
    return render(request, 'adivinanumapp/adivina.html')

def guess(request):
    random_number = random.randint(1,2)
    user_guess = int(request.POST['guess'])

    if user_guess == random_number:
        message = 'Acertaste!'

    if user_guess > random_number:
        message = 'Es mas pequeño!'

    if user_guess< random_number:
        message = 'Es mas grande!'

    return render(request, 'adivinanumapp/guess.html', {'message':message})