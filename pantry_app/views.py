from rest_framework import viewsets
from django.shortcuts import render
from .serializers import ItemSerializer, PantrySerializer, UserProfileSerializer
from .models import Item, Pantry, UserProfile
import requests
from django.http import JsonResponse, HttpResponse

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
