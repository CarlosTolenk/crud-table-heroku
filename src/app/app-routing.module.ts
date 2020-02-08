import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {FormComponent} from "./components/form/form.component";
import {DashboardComponent} from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'add', component: FormComponent},
  {path: 'edit/:commentId', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
