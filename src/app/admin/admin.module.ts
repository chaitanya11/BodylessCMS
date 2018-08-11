import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WebPageBuilderComponent } from '../components/webpage-builder/webpage-builder.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule
  ],
  declarations: [
    DashboardComponent,
    WebPageBuilderComponent
  ]
})
export class AdminModule { }