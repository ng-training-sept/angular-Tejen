import { Routes } from '@angular/router';
import { authGuard } from './auth/auth.constants';

export const routes: Routes = [
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: 'sports', canActivate: [authGuard], loadChildren: () => import('./forms/sports/sports.routes').then(m => m.routes)},
    {path: 'grocery',  canActivate: [authGuard], loadChildren: () => import('./forms/grocery/grocery.routes').then(m => m.routes)},
    {path: 'home',  canActivate: [authGuard], loadChildren: () => import('./components/home/home.routes').then(m => m.routes)},
    {path: '**', loadChildren: () => import('./components/unknown/unknown.routes').then(m => m.routes)},

  ];