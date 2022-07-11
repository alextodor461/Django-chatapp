from django.shortcuts import render
from .models import Message, Chat
from django.contrib.auth.decorators import login_required
from django.contrib.auth import logout
from django.http import HttpResponseRedirect

@login_required(login_url='/login/')
def index(request):
    if request.method == 'POST':
        #print the data that you get from the 'textmessage' var in the html template
        print('Received Data ' + request.POST['textmessage'])
        myChat = Chat.objects.get(id=1)
        Message.objects.create(textmessage=request.POST['textmessage'], chat=myChat, author=request.user, receiver=request.user)
    chat_messages = Message.objects.filter(chat__id=1)
    return render(request, 'chat/index.html', {'messages': chat_messages})

def logout_view(request):
    logout(request)
    return HttpResponseRedirect('/chat/')