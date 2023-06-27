#Rutas que necesita el front para consultar
from django.urls import path, include
from rest_framework import routers
from tasks import views
from rest_framework.documentation import include_docs_urls

#Genera  GET, POST PUT, PATCH, DELETE con la ruta

#lineas de direccion router que seran ocupados para mostar view en la url, y que sera utilizado en la parte front react para la interaccion entre ambos.
router = routers.DefaultRouter()
router.register(r"tasks", views.TaskView, "tasks")


#Versionado de api, en este caso version 1
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/", include_docs_urls(title="Task API")) #Api para documentar nuestro CRUD
]



