import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from "../guards/auth.guard";
// import { SessionResolver } from "../resolvers/sesstion.reolver";
import { LogoutComponent } from "./logout/logout.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebPageBuilderComponent } from './webpage-builder/webpage-builder.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'shdowTheme',
    loadChildren: '../themes/shadow/shadow.module#ShadowModule',
    canActivate: [AuthGuard]
  },
  {
    path: 'webpagebuilder',
    component: WebPageBuilderComponent,
    canActivate: [AuthGuard],
    // resolve: {
    //   sessionData: SessionResolver
    // }
  },
  {
    path: 'logout',
    component: LogoutComponent
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
