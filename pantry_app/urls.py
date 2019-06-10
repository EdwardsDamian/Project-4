from .views import ItemViewSet, PantryViewSet, ShoppingListViewSet, UserProfileViewSet
from rest_framework import routers


router = routers.SimpleRouter()

router.register('items', ItemViewSet)
router.register('pantries', PantryViewSet)
router.register('shoppinglists', ShoppingListViewSet)
router.register('userprofiles', UserProfileViewSet)

urlpatterns = router.urls