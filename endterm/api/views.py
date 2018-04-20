from django.shortcuts import render
from api.models import Todo
from django.utils import timezone
from .forms import TodoForm
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import redirect

@csrf_exempt
def todo_list(request):
    if request.method == "GET":
        todos = Todo.objects.all().order_by('priority')
        todos_json = [t.to_json() for t in todos]
        return JsonResponse(todos_json, safe=False)
      
    elif request.method == "POST":
        data = request.POST
        todo = Todo()
        todo.text = data.get('text','')
        todo.priority = data.get('priority', '')
        todo.save()
    
    return JsonResponse(todo.to_json(), safe=False)
       
    
def todo_details(request, todo_id):
    todo = Todo.objects.get(pk=todo_id)
    return render(request, 'todo/todo_details.html', {'todo': todo})

def todo_edit(request, pk):
    todo = Todo.objects.get(pk=pk)
    if request.method == "POST":
        form = TodoForm(request.POST, instance=todo)
        if form.is_valid():
            todo = form.save(commit=False)
            todo.save()
            return redirect('todo_list')
    else:
        form = TodoForm(instance=todo)
    return render(request, 'todo/todo_edit.html', {'form': form})


def todo_new(request):
    if request.method == "POST":
        form = TodoForm(request.POST)
        if form.is_valid():
            todo = form.save(commit=False)
            todo.save()
            return redirect('todo_list')
    else:
        form = TodoForm()
    return render(request, 'todo/todo_edit.html', {'form': form})

def todo_delete(request,pk):
    todo = Todo.objects.get(id=pk)
    todo.delete()
    return redirect('todo_list')