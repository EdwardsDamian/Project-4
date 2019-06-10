from django.db import models
# from model_utils import Choices

# Create your models here.
class UserProfile(models.Model):
    name = models.CharField(default = '', max_length = 60)
    address = models.CharField(default = '', max_length = 80)
    city = models.CharField(default = '', max_length = 60)
    state = models.CharField(default = '', max_length = 40)
    zip_code = models.CharField(default = '', max_length = 5)

    def __str__(self):
        return f"{self.name}, {self.zip_code}"

class Item(models.Model):
    name = models.CharField(default = '', max_length = 40, help_text='Enter item or product name' )
    description = models.CharField(default = '', max_length = 40)
    size = models.CharField(default = '', max_length = 20)   

    def __str__(self):
        return self.name     

class Pantry(models.Model):
    #pass
    # STATUS = Choices('dry goods cabinet', 'refrigerator')
    # status = models.CharField(choices=STATUS, default=STATUS.refrigerator, max_length=20)
#class Item(models.Model):
    
    is_perishable = models.BooleanField(default=True)
    location = models.CharField(default = '', max_length = 40)
    expiration_date = models.DateField(blank=False, help_text= 'For produce w/o exp date consider adding 6 days to purchase date')
    purchase_date = models.DateField(blank=False)
    item = models.ForeignKey(Item, on_delete =models.CASCADE, default='', related_name = 'pantry_item')
    userprofile = models.ForeignKey(UserProfile, on_delete =models.CASCADE, default='', related_name = 'pantry_item')

    def __str__(self):
        return str(self.item)

class ShoppingList(models.Model):
    
    quantity = models.PositiveSmallIntegerField(blank=False)
    item = models.ForeignKey(Item, on_delete =models.CASCADE, default='', related_name = 'shopping_list')
    userprofile = models.ForeignKey(UserProfile, on_delete =models.CASCADE, default='', related_name = 'shopping_list')

    def __str__(self):
        return str(self.item)


     


