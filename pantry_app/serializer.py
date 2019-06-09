from .models import Item, Pantry, ShoppingList
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

    shopping_list = serializers.HyperlinkedRelatedField(
        view_name='shoppinglist_detail',
        many=True,
        read_only=True
    )

    class Meta:
        model=Pantry
        fields=('is_perishable', 'location', 'expiration_date', 'purchase_date', 'item', 'shopping_list')

class ShoppingListSerializer(serializers.HyperlinkedModelSerializer):
    item = serializers.PrimaryKeyRelatedField(
        queryset = Item.objects.all()
    )

    class Meta:
        model=ShoppingList
        fields=('quantity', 'item')