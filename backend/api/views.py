from django.shortcuts import render
from django.http import JsonResponse

def login_view(request):
    if request.method == 'POST':
        return JsonResponse({'token': 'sample_token', 'userId': 'sample_user_id'})
# Create your views here.
