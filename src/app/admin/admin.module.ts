import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebPageBuilderComponent } from '../components/webpage-builder/webpage-builder.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ],
  declarations: [
    DashboardComponent,
    WebPageBuilderComponent,
    LoginComponent,
    SignupComponent
  ]
})
export class AdminModule { }