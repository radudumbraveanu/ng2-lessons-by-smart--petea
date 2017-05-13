import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutXComponent } from './about-x.component';

describe('AboutXComponent', () => {
  let component: AboutXComponent;
  let fixture: ComponentFixture<AboutXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
