import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from './features/navbar/navbar.module';
import {AuthGuard} from "./core/auth.guard";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employee/employee.module').then(
        (m) => m.EmployeeModule,
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: 'details',
    loadChildren: () =>
      import('./features/employee-details/employee-detail.module').then(
        (m) => m.EmployeeDetailModule,
      ),
    // canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./features/auth/auth.module').then(
        (m) => m.AuthModule,
      ),
  },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), NavbarModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
