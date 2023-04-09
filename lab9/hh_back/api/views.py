from django.shortcuts import render, HttpResponseRedirect
from django.http import HttpResponse, Http404, JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from rest_framework import status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from django.views.decorators.csrf import csrf_exempt

# Create your views here.

@csrf_exempt
def get_api_companies(request):
    companies = Company.objects.all()
    if request.method == 'GET':
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

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
