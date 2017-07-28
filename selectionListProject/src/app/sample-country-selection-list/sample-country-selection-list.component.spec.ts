import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCountrySelectionListComponent } from './sample-country-selection-list.component';

describe('SampleCountrySelectionListComponent', () => {
  let component: SampleCountrySelectionListComponent;
  let fixture: ComponentFixture<SampleCountrySelectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleCountrySelectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCountrySelectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
