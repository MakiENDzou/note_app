from django.urls import path 
from api import views 



urlpatterns = [
    path('',views.routes),
    path('notes/', views.NotesView),
    # path('note/<str:id>/', views.note),
    # path('note/', views.NoteViewSet.as_view(), name='note'),
    path('createnote/', views.creatingNote),
    path('noteDetails/<str:id>/', views.noteDetails),
    path('deleteNote/<str:id>/', views.deleteNote),
    path('updateNote/<str:id>/', views.updateNote),
    




]