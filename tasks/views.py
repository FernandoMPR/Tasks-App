from django.shortcuts import render
from rest_framework import viewsets
from .serializer import TaskSerializer
from .models import Task

# Create your views here.

#Creacion de CRUD traido desde nuetro modelo y serializer, aplicandolo a todo.
class TaskView (viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()