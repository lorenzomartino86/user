import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRegistrationFormComponent } from './error-registration-form.component';

describe('ErrorRegistrationFormComponent', () => {
  let component: ErrorRegistrationFormComponent;
  let fixture: ComponentFixture<ErrorRegistrationFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorRegistrationFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorRegistrationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
