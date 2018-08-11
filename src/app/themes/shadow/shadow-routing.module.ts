import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShadowLandingPageComponent } from './shadow-landing-page/shadow-landing-page.component';
const routes: Routes = [
  {
    path: '',
    component: ShadowLandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShadowRoutingModule { }
