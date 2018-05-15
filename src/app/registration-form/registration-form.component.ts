import { Component, OnInit, NgModule } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Country } from './country'

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styles: []
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;
  countryFormControl: FormControl;
  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;

  countries = [
     new Country(1, 'Ireland' ),
     new Country(2, 'India' ),
     new Country(3, 'Australia' ),
     new Country(4, 'Brazil'),
     new Country(5, 'USA'),
     new Country(6, 'Italy'),
     new Country(7, 'France'),
     new Country(8, 'Spain'),
     new Country(9, 'Mexico')
  ];

  constructor() {}

  ngOnInit() {

     this.countryFormControl = new FormControl('', Validators.required);
     this.firstNameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
     this.lastNameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);


     this.form = new FormGroup({
        'firstName': this.firstNameFormControl,
        'lastName': this.lastNameFormControl,
        'country': this.countryFormControl
      });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    console.log(this.form);
    if (this.form.valid) {
      console.log('form submitted');
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      console.log(field);
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  reset(){
    this.form.reset();
  }
}