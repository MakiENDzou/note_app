from django.shortcuts import render



# Create your views here.






def index(request):
    return render(request,'notepad_project/inbox.html', {})


def note(request):
    return render(request,'notepad_project/notes.html', {})

