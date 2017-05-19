import { Component, ViewChild, OnInit } from '@angular/core';
import { InnerComponent } from './inner/inner.component';

@Component({
  selector: 'app-root',
  template: `
    <p>{{title | uppercase | lowercase}}</p>
    <p>{{mydate | date: 'mediumDate'}}</p>
    <p>{{title | capitalize}}</p>
    <p>{{5 | mypow: 2}}</p>
    <inner (myevent)="innermyevent($event);"></inner>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  mydate = new Date();
  
  @ViewChild(InnerComponent)
  inner;
  
  innermyevent(x: any) {
    alert('inner clicked!!!');
    console.log(x);
  }
  
  ngOnInit() {
    this.inner.myevent.subscribe((x: any) => console.log("reflection ", x));
  }
}
