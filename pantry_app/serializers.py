from .models import Item, Pantry, UserProfile
from rest_framework import serializers


class PantrySerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
        
        
    )
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    ) 
    
    class Meta:
        model=Pantry
        fields=('id', 'userprofile','location', 'items')

class ItemSerializer(serializers.ModelSerializer):
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    )
    pantry = serializers.PrimaryKeyRelatedField(
        queryset = Pantry.objects.all()
    )
    class Meta:
        model=Item 
        fields=('id', 'name', 'description', 'size', 'is_perishable', 'expiration_date', 'purchase_date', 'pantry', 'userprofile')

class UserProfileSerializer(serializers.ModelSerializer):
    pantry = PantrySerializer(many=True, required=False, read_only=True )

    items = ItemSerializer(many=True, required=False, read_only=True)

    class Meta:
        model=UserProfile
        fields=('id', 'name', 'address', 'city', 'state', 'zip_code', 'items', 'pantry')
