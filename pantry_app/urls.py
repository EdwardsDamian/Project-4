from .views import ItemViewSet, PantryViewSet, ShoppingListViewSet
from rest_framework import routers


router = routers.SimpleRouter()

router.register('items', ItemViewSet)
router.register('pantries', PantryViewSet)
router.register('shoppinglists', ShoppingListViewSet)

urlpatterns = router.urls