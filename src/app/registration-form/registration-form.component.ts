import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Country } from './country'
import { UserService } from '../services/index';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styles: []
})
export class RegistrationFormComponent implements OnInit {
  form: FormGroup;
  model: any = {};
  firstNameFormControl: FormControl;
  lastNameFormControl: FormControl;
  countryFormControl: FormControl;
  phoneNumberFormControl: FormControl;

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

  loading = false;

  constructor(
     private router: Router,
     private userService: UserService) {}

  ngOnInit() {

     this.countryFormControl = new FormControl('', Validators.required);
     this.firstNameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
     this.lastNameFormControl = new FormControl('', [Validators.required, Validators.minLength(5)]);
     this.phoneNumberFormControl = new FormControl(null, [Validators.required, Validators.pattern("^\\+[1-9]{1}[0-9]{3,14}$")]);


     this.form = new FormGroup({
        'firstName': this.firstNameFormControl,
        'lastName': this.lastNameFormControl,
        'country': this.countryFormControl,
        'phoneNumber': this.phoneNumberFormControl
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
      this.userService.create(this.model).subscribe(
            data => {
                    console.log('Can Register');
                },
            error => {
                    console.log(error);
             });
      this.form.reset();
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      //console.log(field);
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
