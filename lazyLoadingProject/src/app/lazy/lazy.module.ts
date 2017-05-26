import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './lazy.routing';
import { LazyComponent } from './lazy/lazy.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [LazyComponent]
})
export class LazyModule { }
