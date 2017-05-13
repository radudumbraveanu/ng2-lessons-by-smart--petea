import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <form #myform="ngForm" (ngSubmit)="submitform(myform)">
      <div ngModelGroup="name">
        <p>
          <label>Username</label>
          <input type="text" name="username" [(ngModel)]="user.username">
        </p>
        <p>
          <label>Full name</label>
          <input type="text" name="fullname" [(ngModel)]="user.fullname">
        </p>
      </div>
      <div ngModelGroup="address">
        <p>
          <label>City</label>
          <input type="text" name="city" [(ngModel)]="user.city">
        </p>
        <p>
          <label>Country</label>
          <input type="text" name="country" [(ngModel)]="user.country">
        </p>
      </div>
      <button type="submit">Submit</button>
      <button (click)="user = user1">Set user1</button>
    </form>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    username: 'Radu',
    fullname: 'Radu D.',
    city: 'Balti',
    country: 'Moldova'
  };

  user1 = {
    username: 'Petruchio',
    fullname: 'Petruchio B.',
    city: 'Balti',
    country: 'Moldova'
  };

  submitform(form: any) {
    console.log(form.value);
    console.log(this.user);
  }
}
