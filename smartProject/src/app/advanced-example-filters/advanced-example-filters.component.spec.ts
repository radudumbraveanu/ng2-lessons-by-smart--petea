import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedExampleFiltersComponent } from './advanced-example-filters.component';

describe('AdvancedExampleFiltersComponent', () => {
  let component: AdvancedExampleFiltersComponent;
  let fixture: ComponentFixture<AdvancedExampleFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedExampleFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedExampleFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
