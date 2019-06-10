from django.contrib import admin
from .models import Item, Pantry, UserProfile
# Register your models here.

admin.site.register([Item, Pantry, UserProfile])
