from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect


def registerUser(request):
    if request.method == 'POST':
        user = User.objects.create_user(first_name = request.POST.get('firstname'),  username = request.POST.get('username'), email = request.POST.get('email'), password = request.POST.get('password'))
        
        return HttpResponseRedirect('/login/')
    return render(request, 'register/index.html')
    
