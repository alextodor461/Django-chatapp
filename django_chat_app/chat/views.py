from django.shortcuts import render
from .models import Message, Chat
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.http import HttpResponseRedirect
from django.http import JsonResponse
from django.core import serializers

@login_required(login_url='/login/')
def index(request):
    if request.method == 'POST':
        #print the data that you get from the 'textmessage' var in the html template
        print('Received Data ' + request.POST['textmessage'])
        myChat = Chat.objects.get(id=1)
        new_message = Message.objects.create(textmessage=request.POST['textmessage'], chat=myChat, author=request.user, receiver=request.user)
        #Serializers is a library to change the form of an object. In this case we change the object to an JSON
        serialized_obj = serializers.serialize('json', [ new_message, ])
        #We get the json with JsonResponse and we transform the Array object in an JSON with [1:-1]
        return JsonResponse(serialized_obj[1:-1], safe=False)
    chat_messages = Message.objects.filter(chat__id=1)
    return render(request, 'chat/index.html', {'messages': chat_messages})
    

def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/chat/')