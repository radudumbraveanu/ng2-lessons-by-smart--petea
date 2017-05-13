import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BasicExampleSourceComponent } from './basic-example-source/basic-example-source.component';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdvancedExampleFiltersComponent } from './advanced-example-filters/advanced-example-filters.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicExampleSourceComponent,
    AdvancedExampleFiltersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SmartTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
