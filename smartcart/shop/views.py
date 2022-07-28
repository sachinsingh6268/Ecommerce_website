from unicodedata import category
from urllib import response
from django.shortcuts import render
from .models import Product, Contact, Order,Update
# from .models import Contact
from math import ceil
import json

# Create your views here.
from django.http import HttpResponse


def index(request):
    template_name = 'shop/index.html'
    # products = Product.objects.all()
    # n = len(products)
    # noOfSlides = n//3 + ceil((n/3)-(n//3))
    allproducts = []
    # it will give us a dictionary of key,values pairs(as per the parameter given inside parenthesis)
    categoryProducts = Product.objects.values('category')
    categories = {item['category'] for item in categoryProducts}

    for cat in categories:
        products = Product.objects.filter(category=cat)
        n = len(products)
        noOfSlides = n//3 + ceil((n/3)-(n//3))
        allproducts.append([products, range(noOfSlides)])

    # allproducts = [[products,range(noOfSlides)],[products,range(noOfSlides)]]
    params = {"allProducts": allproducts}
    # params = {"products":products,"noOfSlides":noOfSlides,"range":range(noOfSlides)}
    return render(request, template_name, params)


def about(request):
    return render(request, 'shop/about.html')


def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        phone = request.POST.get('phone', '')
        message = request.POST.get('desc', '')
        contact = Contact(name=name, email=email, phone=phone, message=message)
        contact.save()
    return render(request, 'shop/contact.html')


def tracker(request):
    if request.method == 'POST':
        orderId = request.POST.get('order_id', '')
        email = request.POST.get('email', '')
         
        # now we will check whether the order with given id and email exists or not
        try:
            order = Order.objects.filter(order_id = orderId,email = email)
            # will check if order exists or not
            if len(order)>0:
                update = Update.objects.filter(orderid = orderId)
                updates = []
                for item in update:
                    updates.append({'text':item.update_desc, 'date':item.update_date})
                    response = json.dumps(updates,default=str)
                # tracker page will get this as response
                return HttpResponse(response)
            else:
                return HttpResponse('{}')

        except Exception as e:
            return HttpResponse('{}') 
    return render(request, 'shop/tracker.html')


def search(request):
    return render(request, 'shop/search.html')


def products(request, myid):
    # fetch the product using id
    product = Product.objects.filter(id=myid)
    return render(request, 'shop/productView.html', {'product': product[0]})


def checkout(request):
    if(request.method == "POST"):
        items_json = request.POST.get('items_json', "")
        name = request.POST.get('name', '')
        email = request.POST.get('email', '')
        address = request.POST.get('address', '')
        phone = request.POST.get('phone', '')
        state = request.POST.get('state', '')
        city = request.POST.get('city', '')
        pincode = request.POST.get('pincode', '')

        order = Order(items_json=items_json, name=name, email=email,
                      address=address, phone=phone, state=state, city=city, pincode=pincode)
        order.save()

        update = Update(orderid = order.order_id,update_desc = "Order has been placed")
        update.save()

        return render(request,'shop/checkout.html',{'order_done':"submitted",'id':order.order_id})

    return render(request,'shop/checkout.html')
