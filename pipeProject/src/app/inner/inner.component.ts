import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'inner',
  template: `
    <p>------------</p>
    <button (click)="myevent.emit({a: 'a', b: 1})">Inner button</button>
    <p>------------</p>
  `,
  styleUrls: ['./inner.component.css']
})
export class InnerComponent implements OnInit {
  @Output()
  myevent = new EventEmitter<any>();

  constructor() { 
    this.myevent.subscribe((x: any) => console.log(x));
  }

  ngOnInit() {
  }

}
