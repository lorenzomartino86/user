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
});
