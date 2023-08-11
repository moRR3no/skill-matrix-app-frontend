import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employee/employee.module').then(
        (m) => m.EmployeeModule,
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule,
      ),
  },
  {
    path: 'detail',
    loadChildren: () =>
      import('./features/employee-detail/employee-detail.module').then(
        (m) => m.EmployeeDetailModule
      )
  },
  {path: '**', redirectTo: '/dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
