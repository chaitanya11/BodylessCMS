import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebPageBuilderComponent } from '../components/webpage-builder/webpage-builder.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'shdowTheme',
    loadChildren: '../themes/shadow/shadow.module#ShadowModule'
  },
  {
    path: 'webpagebuilder',
    component: WebPageBuilderComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
