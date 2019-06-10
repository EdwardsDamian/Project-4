from .models import Item, Pantry, UserProfile
from rest_framework import serializers

class UserProfileSerializer(serializers.ModelSerializer):
    pantry = serializers.PrimaryKeyRelatedField(
        # view_name='',
        many=True,
        read_only=True
    )
    items = serializers.PrimaryKeyRelatedField(
        # view_name='',
        many=True,
        read_only=True
    )

    # pantry_item = serializers.PrimaryKeyRelatedField(
    #     queryset = Pantry.objects.all()
    # )
    # shopping_list = serializers.PrimaryKeyRelatedField(
    #     queryset = Pantry.objects.all()
    # )

    # pantry_item = serializers.PrimaryKeyRelatedField(
    #     queryset = Pantry.objects.all()
    # )
    # shopping_list = serializers.PrimaryKeyRelatedField(
    #     queryset = ShoppingList.objects.all()
    # )

    class Meta:
        model=UserProfile
        fields=('name', 'address', 'city', 'state', 'zip_code', 'items', 'pantry')

class PantrySerializer(serializers.ModelSerializer):
    items = serializers.PrimaryKeyRelatedField(
        # view_name='',
        many=True,
        read_only=True
    )
    # item = serializers.PrimaryKeyRelatedField(
    #     queryset = Item.objects.all()
    # )
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    )

    # shopping_list = serializers.HyperlinkedRelatedField(
    #     view_name='shoppinglist_detail',
    #     many=True,
    #     read_only=True
    # )

    class Meta:
        model=Pantry
        fields=('userprofile','location', 'items', 'is_perishable', 'expiration_date', 'purchase_date',  'shopping_list', )



# class ShoppingListSerializer(serializers.HyperlinkedModelSerializer):
#     item = serializers.PrimaryKeyRelatedField(
#         queryset = Item.objects.all()
#     )
#     userprofile = serializers.PrimaryKeyRelatedField(
#         queryset = UserProfile.objects.all()
#     )

#     class Meta:
#         model=ShoppingList
#         fields=('quantity', 'item', 'userprofile')




class ItemSerializer(serializers.ModelSerializer):
    userprofile = serializers.PrimaryKeyRelatedField(
        queryset = UserProfile.objects.all()
    )
    pantry = serializers.PrimaryKeyRelatedField(
        queryset = Pantry.objects.all()
    )


    # pantry_item = serializers.HyperlinkedRelatedField(
    #     view_name='pantry_detail',
    #     many=True,
    #     read_only=True
    # )

    # shopping_list = serializers.HyperlinkedRelatedField(
    #     view_name='shoppinglist_detail',
    #     many=True,
    #     read_only=True
    # )

    class Meta:
        model=Item 
        fields=('name', 'description', 'size', 'userprofile', 'pantry')
