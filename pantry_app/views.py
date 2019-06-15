from rest_framework import viewsets
from django.shortcuts import render
from .serializers import ItemSerializer, PantrySerializer, UserProfileSerializer
from .models import Item, Pantry, UserProfile
import requests
from django.http import JsonResponse, HttpResponse
from django.views import View
# from decouple import config

# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class PantryViewSet(viewsets.ModelViewSet):
    queryset = Pantry.objects.all()
    serializer_class = PantrySerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

def MarketView(request,zip_code):
    # request.parser_context['zip_code']
    # print(f"zip: {zip}")
    response = requests.get(f"https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip={zip_code}")
    # response = requests.get('https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip=30315')
    # json = response.json()
    # return JsonResponse(json,safe=False)
    return HttpResponse(response, content_type='application/json')

