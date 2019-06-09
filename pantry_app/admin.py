from django.contrib import admin
from .models import Item, Pantry, ShoppingList
# Register your models here.

admin.site.register([Item, Pantry, ShoppingList])
