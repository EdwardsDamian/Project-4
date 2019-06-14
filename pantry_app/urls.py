from .views import ItemViewSet, PantryViewSet, UserProfileViewSet
from rest_framework import routers
from django.urls import include, path
from . import views
router = routers.SimpleRouter()

router.register('items', ItemViewSet)
router.register('pantries', PantryViewSet)
router.register('userprofiles', UserProfileViewSet)

urlpatterns = [
    path('',include(router.urls)),
    path('markets/<int:zip_code>/', views.MarketView, name='markets'),
]

# urlpatterns += router.urls