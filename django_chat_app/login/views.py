from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.contrib.auth import authenticate, login

def index2(request):
    redirect = request.GET.get('next')
    if request.method == 'POST':
        #PW and UN from the html template
        #Authenticate function from Django checks if there is a user with this data
        user = authenticate(username = request.POST.get('username'), password = request.POST.get('password')) 
        if user:
            login(request, user) #The Login() function from Django login the user
            return HttpResponseRedirect('/chat/') 
        else:
            return render(request, 'login/index.html', {'wrongData': True, 'redirect': redirect}) 
    return render(request, 'login/index.html', {'redirect': redirect})
