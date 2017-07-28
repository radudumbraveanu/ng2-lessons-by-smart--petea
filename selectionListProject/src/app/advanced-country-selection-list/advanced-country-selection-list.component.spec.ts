import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedCountrySelectionListComponent } from './advanced-country-selection-list.component';

describe('AdvancedCountrySelectionListComponent', () => {
  let component: AdvancedCountrySelectionListComponent;
  let fixture: ComponentFixture<AdvancedCountrySelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvancedCountrySelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvancedCountrySelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
