from rest_framework import viewsets
from django.shortcuts import render
from .serializers import ItemSerializer, PantrySerializer, UserProfileSerializer
from .models import Item, Pantry, UserProfile
import requests
from django.http import JsonResponse, HttpResponse
from django.views import View

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
    response = requests.get(f"https://search.ams.usda.gov/farmersmarkets/v1/data.svc/zipSearch?zip={zip_code}")
    return HttpResponse(response, content_type='application/json')

