from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField(max_length=50)
    price = models.FloatField()
    description = models.TextField()
    count = models.IntegerField()
    is_active = models.BooleanField()

    def __str__(self):
        return self.name + ' ' + str(self.price) + ' ' + self.description + ' ' + str(self.count) + ' ' + str(self.is_active)

class Category(models.Model):
    name = models.CharField(max_length=50)
    product = models.ManyToManyField(Product)
    
    def __str__(self):
        return self.name