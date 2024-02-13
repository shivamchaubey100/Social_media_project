from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def say_hello(request):
    return render(request, 'hello.html', {'name': 'Mosh'})

def index(request):
    return HttpResponse('<h1>Welcome to Social book</h1>')
