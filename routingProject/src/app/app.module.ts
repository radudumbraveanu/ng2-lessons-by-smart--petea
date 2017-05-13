import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AboutXComponent } from './about-x/about-x.component';
import { AboutHomeComponent } from './about-home/about-home.component';
import { AboutItemComponent } from './about-item/about-item.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent,
        children: [
          {
            path: '',
            component: AboutHomeComponent
          },
          {
            path: 'item',
            component: AboutItemComponent
          }
        ]
    },
    {
        path: 'about/x',
        component: AboutXComponent
    }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    AboutXComponent,
    AboutHomeComponent,
    AboutItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
