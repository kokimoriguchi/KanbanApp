from django.shortcuts import render
from django.http import JsonResponse
from .models import User
from .models import Task

def login_view(request):
    if request.method == 'GET':
        email = request.GET.get('email')
        password = request.GET.get('password')
        if email == 'sample_email' and password == 'sample_password':
            return JsonResponse({'token': 'sample_token', 'userId': 'sample_user_id'})
        else:
            return JsonResponse({'error': 'Invalid credentials'})

def user_index(request):
    data = User.objects.all()
    return JsonResponse(list(data.values()), safe=False)

def task_index(request):
    data = Task.objects.all()
    return JsonResponse(list(data.values()), safe=False)