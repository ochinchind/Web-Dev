import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiUrl = 'http://127.0.0.1:8000/api/';
  constructor(private http: HttpClient) { }

  getCompanies(): Observable<any> {
    return this.http.get<any>(this.apiUrl+'companies/');
  }

  getVacanciesOfCompany(id:any): Observable<any> {
    return this.http.get<any>(this.apiUrl+'companies/'+id+'/vacancies/');
  }


}
