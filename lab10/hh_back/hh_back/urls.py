"""hh_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from api.views import *
from rest_framework.urlpatterns import format_suffix_patterns


urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/companies/', get_api_companies),
    path('api/companies/post/', create_company),
    path('api/companies/<int:id>/', get_api_companies_id),
    path('api/companies/<int:id>/vacancies/', get_api_companies_id_vacancies),
    path('api/vacancies/', get_api_vacancies),
    path('api/vacancies/post/', create_vacancy),
    path('api/vacancies/<int:id>/', get_api_vacancies_id),
    path('api/vacancies/top_ten/', get_api_vacancies_top_ten),
    path('api/companyview/<int:pk>/', CompanyView.as_view()),
    path('api/vacancyview/<int:pk>/', VacancyView.as_view()),

]

urlpatterns = format_suffix_patterns(urlpatterns)