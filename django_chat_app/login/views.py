from django.shortcuts import render

# Create your views here.

def index2(request):
    return render(request, 'login/index.html')