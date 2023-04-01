from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, Http404, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status
from api.models import Product, Category
from api.serializers import ProductSerializer, CategorySerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def get_product(request):
    products = Product.objects.all()
    if request.method == 'GET':
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_product_one(request, id):
    if request.method == 'GET':
        try:
            product = Product.objects.get(id=id)
        except Product.DoesNotExist:
            return HttpResponse('Product not found')
        serializer = ProductSerializer(product, many=False)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def get_category(request):
    categories = Category.objects.all()
    if request.method == 'GET':
        serializer = CategorySerializer(categories, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_category_one(request, id):
    if request.method == 'GET':
        try:
            category = Product.objects.get(id=id)
        except Category.DoesNotExist:
            return HttpResponse('Product not found')
        serializer = CategorySerializer(category, many=False)
        return JsonResponse(serializer.data, safe=False)


@csrf_exempt
def get_category_one_product(request, id):
    if request.method == 'GET':
        try:
            category = Category.objects.get(id=id)
        except Category.DoesNotExist:
            return HttpResponse('Product not found')
        products = category.product.all()
        serializer = ProductSerializer(products, many=True)
        return JsonResponse(serializer.data, safe=False)


@api_view(['POST'])
def post_product(request):
    if(request.method == 'POST'):
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def post_categories(request):
    if(request.method == 'POST'):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
