from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, Http404, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
# Create your views here.

@csrf_exempt
def get_api_companies(request):
    companies = Company.objects.all()
    if request.method == 'GET':
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

@api_view(['POST'])
def create_company(request):
    if request.method == 'POST':
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class CompanyView(APIView):
    def get_object(self, pk):
        try:
            return Company.objects.get(pk=pk)
        except Company.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        company = self.get_object(pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)        
    def delete(self, request, pk, format=None):
        company = self.get_object(pk)
        company.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    def put(self, request, pk, format=None):
        company = self.get_object(pk)
        serializer = CompanySerializer(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def get_api_companies_id(request, id):
    if request.method == 'GET':
        try:
            company = Company.objects.get(id=id)
        except Company.DoesNotExist:
            return HttpResponse('Company not found')
        serializer = CompanySerializer(company, many=False)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_api_companies_id_vacancies(request, id):
    if request.method == 'GET':
        try:
            vacancies = Vacancy.objects.filter(company_id=id)
        except Vacancy.DoesNotExist:
            return HttpResponse('Vacancies not found')
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_api_vacancies(request):
    vacancies = Vacancy.objects.all()
    if request.method == 'GET':
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

class VacancyView(APIView):
    def get_object(self, pk):
        try:
            return Vacancy.objects.get(pk=pk)
        except Vacancy.DoesNotExist:
            raise Http404
    def get(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy)
        return Response(serializer.data)    
    def put(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        serializer = VacancySerializer(vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    def delete(self, request, pk, format=None):
        vacancy = self.get_object(pk)
        vacancy.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['POST'])
def create_vacancy(request):
    if request.method == 'POST':
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@csrf_exempt
def get_api_vacancies_id(request, id):
    if request.method == 'GET':
        try:
            vacancies = Vacancy.objects.get(id=id)
        except Vacancy.DoesNotExist:
            return HttpResponse('Vacancy not found')
        serializer = VacancySerializer(vacancies, many=False)
        return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def get_api_vacancies_top_ten(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    if request.method == 'GET':
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)
