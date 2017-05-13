import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutItemComponent } from './about-item.component';

describe('AboutItemComponent', () => {
  let component: AboutItemComponent;
  let fixture: ComponentFixture<AboutItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
