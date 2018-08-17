import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShadowLandingPageComponent } from './shadow-landing-page/shadow-landing-page.component';
import { ShadowDashboardComponent } from './shadow-dashboard/shadow-dashboard.component';
const routes: Routes = [
  {
    path: '',
    component: ShadowLandingPageComponent
  },
  {
    path: 'dashboard',
    component: ShadowDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShadowRoutingModule { }
