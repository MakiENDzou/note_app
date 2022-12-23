
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from .serializers import NoteSerializer
from notepad_project.models import Note
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
# from rest_framework import routers
# router = routers.DefaultRouter()
# router.register(r'note', NoteViewSet, basename='note')

# from api import serializers

# Create your views here.


@api_view(['GET'])
def routes(request): 
    routes = { 

        "api/notes/" : "all notes",
        "api/note/id" : "POST, GET, PUT, DELETE",
        


    }
    return Response(routes)

@api_view(['POST'])
# @permission_classes([IsAuthenticated])
def creatingNote(request): 
    
    # note = Note.objects.create(field = request.data['field'] )
    if request.method == "POST":
        serializers = NoteSerializer(data=request.data)
        if serializers.is_valid():
            serializers.save()
            return Response(serializers.data)
        else:
            return Response({'error': 'Not valid.'})

          

@api_view(['GET', "POST"])
def NotesView(request):
    if request.method == "POST":
        serializer = NoteSerializer(data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
        else:
                return Response(serializer.errors)

    else:
        notes = Note.objects.all()
        serializer = NoteSerializer(notes, many=True)
        return Response(serializer.data)


@api_view(['GET'])
def noteDetails(request,id):
    if request.method == "GET":
        try: 
            # note = Note.objects.get(id) 
            # note.save()
            # serializer = NoteSerializer(note,many=False)
            # return Response(serializer.data)
            note = Note.objects.get(id=id)
            serializer = NoteSerializer(note,many=False)
            return Response(serializer.data)
            
        except: 
            return Response("Error, there is no note with that id") 


@api_view(['DELETE'])
def deleteNote(request,id):
    if request.method == 'DELETE':
        note = Note.objects.get(id=id)
        note.delete()
        return Response('Note successfuly deleted!')


@api_view(['PUT'])
# @permission_classes([IsAuthenticated])
def updateNote(request,id):
      
    if request.method == "PUT":
        print('Success')
        note = Note.objects.get(id=id)
        serializer = NoteSerializer(note, data=request.data)
        if serializer.is_valid():
            print('Success more')
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(serializer.errors)
           
        # try: 
        #     note = Note.objects.get(id) 
        #     note.save()
        #     serializer = NoteSerializer(note,many=False)
        #     return Response(serializer.data)
        # except: 
        #     return Response("Error, there is no note with that id")     
