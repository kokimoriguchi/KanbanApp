from django.shortcuts import render
from django.http import JsonResponse

def login_view(request):
    if request.method == 'GET':
        email = request.GET.get('email')
        password = request.GET.get('password')
        if email == 'sample_email' and password == 'sample_password':
            return JsonResponse({'token': 'sample_token', 'userId': 'sample_user_id'})
        else:
            return JsonResponse({'error': 'Invalid credentials'})