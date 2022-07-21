from django.contrib import admin
from .models import Message, Chat

class ChatAdmin(admin.ModelAdmin):
    fields = ('created_at', 'chat_name')
    list_display = ('created_at',)
class MessageAdmin(admin.ModelAdmin):
    fields = ('textmessage', 'created_at', 'author', 'receiver', 'chat')
    list_display = ('author', 'textmessage', 'created_at')
    search_fields = ['textmessage']

admin.site.register(Message, MessageAdmin)
admin.site.register(Chat, ChatAdmin)