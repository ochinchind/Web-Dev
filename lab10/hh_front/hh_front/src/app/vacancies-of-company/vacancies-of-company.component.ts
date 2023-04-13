import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { ActivatedRoute } from '@angular/router';

interface Vacancy {
  id:any;
  name: string;
  description: string;
  salary: number;
  company: string;
}

@Component({
  selector: 'app-vacancies-of-company',
  templateUrl: './vacancies-of-company.component.html',
  styleUrls: ['./vacancies-of-company.component.css']
})
export class VacanciesOfCompanyComponent {

  vacancies?: Vacancy[];
  id?:number;

  constructor(private myService: ConfigService, private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.myService.getVacanciesOfCompany(this.id).subscribe((data) => {
      this.vacancies = data;
    });
  }

}
