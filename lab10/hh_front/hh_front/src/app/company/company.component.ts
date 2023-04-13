import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

interface Company {
  id:any;
  name: string;
  description: string;
  city: string;
  address: string;
}

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{
  companies?: Company[];

  constructor(private myService: ConfigService) { }
  ngOnInit() {
    this.myService.getCompanies().subscribe((data) => {
      this.companies = data;
    });
  }



}
