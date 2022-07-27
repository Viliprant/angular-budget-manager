import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent as DashboardPage } from './pages/dashboard/dashboard.component';
import { Error404Component as Error404Page } from './pages/error404/error404.component';
import { IncomePage } from './pages/income/income.component';
import { OutcomePage } from './pages/outcome/outcome.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPage },
  { path: 'income', component: IncomePage },
  { path: 'outcome', component: OutcomePage },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: Error404Page }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
