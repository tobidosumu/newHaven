import { Component, ViewChild, OnInit } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Subject {
  fistName: string;
  lastName: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  myForm : any = FormGroup;
  
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  constructor() {}
  ngOnInit(): void {
    this.reactiveForm();
  }

  /* Reactive form */
  reactiveForm() {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }

/* Handle form errors in Angular 8 */
public errorHandling = (control: string, error: string) => {
  return this.myForm.controls[control].hasError(error);
}
submitForm() {
  this.myForm.value
}

}
