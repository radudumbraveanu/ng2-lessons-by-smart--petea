import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicExampleSourceComponent } from './basic-example-source.component';

describe('BasicExampleSourceComponent', () => {
  let component: BasicExampleSourceComponent;
  let fixture: ComponentFixture<BasicExampleSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicExampleSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicExampleSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
