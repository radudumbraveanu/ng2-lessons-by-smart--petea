import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'basic-example-source',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
  styleUrls: ['./basic-example-source.component.css']
})
export class BasicExampleSourceComponent implements OnInit {

  settings = {
    columns:  {
      id: {
        title: "ID"
      },
      name: {
        title: "Full Name"
      },
      username: {
        title: "User Name"
      },
      email: {
        title: "Email"
      }
    }
  };

  data = [
    {
      id: 1,
      name: "my name",
      username: "my username",
      email: "my email"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
