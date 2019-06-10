from django.contrib import admin
from .models import Item, Pantry, ShoppingList, UserProfile
# Register your models here.

admin.site.register([Item, Pantry, ShoppingList, UserProfile])
