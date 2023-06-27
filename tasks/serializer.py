from rest_framework import serializers
from .models import Task


#Serializador para convertir nuestro modelo de Task a JSON
class TaskSerializer (serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = ("id", "title", "description", "done")