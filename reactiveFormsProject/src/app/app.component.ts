import { Component } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="myform" (ngSubmit)="submit()">
      <p>
        <label>Username:</label>
        <input type="text" formControlName="username">
        <span style="color:red;" *ngIf="!myform.controls['username'].valid">Username required!</span>
      </p>
      <p>
        <label>Email:</label>
        <input type="text" formControlName="email">
      </p>
      <button type="submit">Submit</button>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myform: FormGroup;
  constructor(private _formBuidler: FormBuilder) {
    this.myform = _formBuidler.group({
      username: new FormControl('my username', [Validators.required]),
      email: 'myemail@example.com'
    })
  }

  submit() {
    console.log(this.myform.valid);
  }
}
