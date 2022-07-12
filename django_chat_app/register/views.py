from django.shortcuts import render
from django.contrib.auth.models import User
from django.http import HttpResponseRedirect
from django.db import IntegrityError


def registerUser(request):
    if request.method == 'POST':
        try:
            user = User.objects.create_user(first_name = request.POST.get('firstname'),  username = request.POST.get('username'), email = request.POST.get('email'), password = request.POST.get('password'))
            return HttpResponseRedirect('/login/')
        except IntegrityError:
            return HttpResponseRedirect('/register?error=Bitte verwende einen anderen Username')
        except Exception as e:
            print(e)
            return HttpResponseRedirect('/register?error=Ein Unbekannter Fehler ist aufgetreten')
                      
    return render(request, 'register/index.html')
    
