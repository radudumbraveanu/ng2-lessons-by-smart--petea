import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SampleCountrySelectionListComponent } from './sample-country-selection-list/sample-country-selection-list.component';
import {FormsModule} from "@angular/forms";
import { AdvancedCountrySelectionListComponent } from './advanced-country-selection-list/advanced-country-selection-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SampleCountrySelectionListComponent,
    AdvancedCountrySelectionListComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
