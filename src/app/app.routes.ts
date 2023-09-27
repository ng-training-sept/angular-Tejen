import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'sports', loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
    {path: 'grocery', loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes)}
  ];