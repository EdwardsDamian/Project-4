from .models import Item, Pantry, ShoppingList, UserProfile
from rest_framework import serializers

class ItemSerializer(serializers.HyperlinkedModelSerializer):
    pantry = serializers.HyperlinkedRelatedField(
        view_name='pantry_detail',
        many=True,
        read_only=True
    )

    shopping_list = serializers.HyperlinkedRelatedField(
        view_name='shoppinglist_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model=Item 
        fields=('name', 'description', 'size', 'pantry', 'shopping_list')

class PantrySerializer(serializers.HyperlinkedModelSerializer):
    item = serializers.PrimaryKeyRelatedField(
        queryset = Item.objects.all()
    )
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    )

    shopping_list = serializers.HyperlinkedRelatedField(
        view_name='shoppinglist_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model=Pantry
        fields=('is_perishable', 'location', 'expiration_date', 'purchase_date', 'item', 'shopping_list', 'userprofile')

class ShoppingListSerializer(serializers.HyperlinkedModelSerializer):
    item = serializers.PrimaryKeyRelatedField(
        queryset = Item.objects.all()
    )
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    )

    class Meta:
        model=ShoppingList
        fields=('quantity', 'item', 'userprofile')

class UserProfileSerializer(serializers.HyperlinkedModelSerializer):
    pantry = serializers.HyperlinkedRelatedField(
        view_name='pantry_detail',
        many=True,
        read_only=True
    )

    shopping_list = serializers.HyperlinkedRelatedField(
        view_name='shoppinglist_detail',
        many=True,
        read_only=True
    )
    
    # pantry_item = serializers.PrimaryKeyRelatedField(
    #     queryset = Pantry.objects.all()
    # )
    # shopping_list = serializers.PrimaryKeyRelatedField(
    #     queryset = ShoppingList.objects.all()
    # )

    class Meta:
        model=UserProfile
        fields=('name', 'address', 'city', 'state', 'zip_code', 'pantry_item', 'shopping_list')
