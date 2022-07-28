from ast import Str
from django.db import models
 

# Create your models here.
class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=50)
    category = models.CharField(max_length=50,default="")
    subcategory = models.CharField(max_length=50,default="")
    price = models.IntegerField(default=0)
    desc = models.CharField(max_length=5000)
    pub_date = models.DateField()
    image = models.ImageField(upload_to = "shop/images",default="")

    def __str__(self):
        return self.product_name

    
class Contact(models.Model):
    msg_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50,default="")
    phone = models.CharField(max_length=20,default='')
    message = models.CharField(max_length=5000,default="")

    def __str__(self):
        return self.name


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    items_json = models.CharField(max_length=5000,default='')
    name = models.CharField(max_length=70,default='')
    email = models.EmailField(max_length=70,default='')
    address = models.CharField(max_length=130,default='')
    phone = models.CharField(max_length=50,default='')
    state = models.CharField(max_length=30,default='')
    city = models.CharField(max_length=30,default='')
    pincode = models.IntegerField()

    def __str__(self):
        return str(self.order_id)+" "+self.name


class Update(models.Model):
    update_id = models.AutoField(primary_key=True)
    orderid = models.IntegerField(default = 0)
    update_desc = models.CharField(max_length=5000,default="")
    update_date = models.DateField(auto_now_add=True)


    def __str__(self):
        return self.update_desc[0:8] + "..."


 
    

 
