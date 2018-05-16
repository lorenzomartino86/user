import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationFormComponent } from './registration-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ErrorRegistrationFormComponent } from '../error-registration-form/error-registration-form.component';
import { UserService } from '../services/index';

class RouterStub {
navigateByUrl(url: string) {
    return url;
  }
}

describe('RegistrationFormComponent', () => {
  let component: RegistrationFormComponent;
  let fixture: ComponentFixture<RegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationFormComponent, ErrorRegistrationFormComponent ],
      providers: [UserService, {provide: Router, useClass: RouterStub}, {provide: HttpClient, useClass: RouterStub}],
      imports: [ FormsModule, ReactiveFormsModule  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  });

  it('firstName field validity', () => {
    let firstName = component.form.controls['firstName'];
    expect(firstName.valid).toBeFalsy();
  });

  it('lastName field validity', () => {
    let lastName = component.form.controls['lastName'];
    expect(lastName.valid).toBeFalsy();
  });

  it('phoneNumber field validity', () => {
    let phoneNumber = component.form.controls['phoneNumber'];
    expect(phoneNumber.valid).toBeFalsy();
  });

  it('country field validity', () => {
    let country = component.form.controls['country'];
    expect(country.valid).toBeFalsy();
  });

  it('all required fields validity', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['firstName'].setValue("FirstNameUser");
    component.form.controls['lastName'].setValue("LastNameUser");
    component.form.controls['phoneNumber'].setValue("0123456789");
    component.form.controls['country'].setValue("Ireland");
    expect(component.form.valid).toBeTruthy();
  });

});
