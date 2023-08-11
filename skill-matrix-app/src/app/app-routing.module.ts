import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './features/employee/employee.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { EmployeeDetailComponent } from './features/employee-detail/employee-detail.component';
import { EmployeeModule } from './features/employee/employee.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'employees', component: EmployeeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: '**', redirectTo: '/dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), EmployeeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
