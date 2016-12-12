import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'statistics', pathMatch: 'full'},
  { path: 'time', redirectTo: 'time' },
  { path: 'academy', redirectTo: 'academy' },
];

export const AppRoutingModule = RouterModule.forRoot(routes);
