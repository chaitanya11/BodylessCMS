import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
