from django.db import models

# Create your models here.
class UserProfile(models.Model):
    name = models.CharField(default = '', max_length = 60)
    address = models.CharField(default = '', max_length = 80)
    city = models.CharField(default = '', max_length = 60)
    state = models.CharField(default = '', max_length = 40)
    zip_code = models.CharField(default = '', max_length = 5)

    def __str__(self):
        return f"{self.name}, {self.zip_code}"

class Pantry(models.Model):
 
    location = models.CharField(default = '', max_length = 40)
    userprofile = models.ForeignKey(UserProfile, on_delete =models.CASCADE, default='', related_name = 'pantry')

    def __str__(self):
        return str(self.location)

class Item(models.Model):
    name = models.CharField(default = '', max_length = 40, help_text='Enter item or product name' )
    description = models.CharField(default = '', max_length = 40)
    size = models.CharField(default = '', max_length = 20) 
    is_perishable = models.BooleanField(default=True)
    expiration_date = models.DateField(blank=False, help_text= 'For produce w/o exp date consider adding 6 days to purchase date')
    purchase_date = models.DateField(blank=False)
    pantry = models.ForeignKey(Pantry, on_delete=models.CASCADE, default='', related_name='items')
    userprofile = models.ForeignKey(UserProfile, on_delete=models.CASCADE, default='', related_name='items')

    def __str__(self):
        return self.name    



     


