import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'error-registration-form',
  templateUrl: './error-registration-form.component.html',
  styleUrls: ['./error-registration-form.component.css']
})
export class ErrorRegistrationFormComponent  {

  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
