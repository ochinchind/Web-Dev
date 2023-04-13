import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { HomeComponent } from './home/home.component';
import { VacanciesOfCompanyComponent } from './vacancies-of-company/vacancies-of-company.component';

const routes: Routes = [  
  { path: 'home', component: HomeComponent },
  { path: 'companies', component: CompanyComponent },
  { path: 'companies/:id/vacancies',data: {routeName: "VacanciesOfCompany"}, component: VacanciesOfCompanyComponent, pathMatch: 'full'},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
