from .models import Item, Pantry, UserProfile
from rest_framework import serializers

class UserProfileSerializer(serializers.ModelSerializer):
    pantry = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
    )
    items = serializers.PrimaryKeyRelatedField(
        many=True,
        read_only=True
    )

    class Meta:
        model=UserProfile
        fields=('name', 'address', 'city', 'state', 'zip_code', 'items', 'pantry')

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
        fields=('userprofile','location', 'items')

class ItemSerializer(serializers.ModelSerializer):
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    )
    pantry = serializers.PrimaryKeyRelatedField(
        queryset = Pantry.objects.all()
    )

    class Meta:
        model=Item 
        fields=('name', 'description', 'size', 'is_perishable', 'expiration_date', 'purchase_date', 'pantry', 'userprofile')