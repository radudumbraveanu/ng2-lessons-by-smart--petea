import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { EagerComponent } from './eager/eager/eager.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full'
    },
    {
        path: 'main',
        component: MainComponent
    },
    {
        path: 'eager',
        component: EagerComponent
    },
    {
        path: 'lazy',
        loadChildren: 'app/lazy/lazy.module#LazyModule'
    }
];

export const routing = RouterModule.forRoot(routes);