import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebPageBuilderComponent } from './webpage-builder/webpage-builder.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    DashboardComponent,
    WebPageBuilderComponent,
    LoginComponent,
    SignupComponent,
    LogoutComponent
  ],
  providers: [
    
  ]
})
export class AdminModule { }