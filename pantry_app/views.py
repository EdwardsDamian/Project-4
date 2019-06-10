from rest_framework import viewsets

from .serializers import ItemSerializer, PantrySerializer, UserProfileSerializer
from .models import Item, Pantry, UserProfile

# Create your views here.

class ItemViewSet(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class PantryViewSet(viewsets.ModelViewSet):
    queryset = Pantry.objects.all()
    serializer_class = PantrySerializer

# class ShoppingListViewSet(viewsets.ModelViewSet):
#     queryset = ShoppingList.objects.all()
#     serializer_class = ShoppingListSerializer

class UserProfileViewSet(viewsets.ModelViewSet):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
