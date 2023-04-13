import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VacanciesOfCompanyComponent } from './vacancies-of-company.component';

describe('VacanciesOfCompanyComponent', () => {
  let component: VacanciesOfCompanyComponent;
  let fixture: ComponentFixture<VacanciesOfCompanyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VacanciesOfCompanyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VacanciesOfCompanyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
