import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'advanced-example-filters',
  template: `
    <ng2-smart-table [settings]="settings" [source]="data"></ng2-smart-table>
  `,
  styleUrls: ['./advanced-example-filters.component.css']
})
export class AdvancedExampleFiltersComponent implements OnInit {

  data = [
    {
      id: 1,
      name: "my name",
      email: "my email",
      passed: "yes"
    },
    {
      id: 2,
      name: "his name",
      email: "his email",
      passed: "no"
    },
    {
      id: 3,
      name: "her name",
      email: "her email",
      passed: "no"
    }
  ];

  settings = {
    columns: {
      id: {
        title: "ID"
      },
      name: {
        title: "Full Name",
        filter: {
          type: "list",
          config: {
            selectText: "Select...",
            list: [
              {value: "my", title: "my"},
              {value: "his", title: "his"},
              {value: "her", title: "her"}
            ]
          }
        }
      },
      email: {
        title: "Email",
        filter: {
          type: "completer",
          config: {
            completer: {
              data: this.data,
              searchFields: "email",
              titleField: "email"
            }
          }
        }
      },
      passed: {
        title: "Passed"
      }
    }
  };

  constructor() { }

  ngOnInit() {
  }

}
