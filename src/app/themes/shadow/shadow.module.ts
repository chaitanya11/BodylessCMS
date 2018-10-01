import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShadowRoutingModule } from './shadow-routing.module';
import { ShadowHeaderComponent } from './shadow-header/shadow-header.component';
import { ShadowFooterComponent } from './shadow-footer/shadow-footer.component';
import { ShadowLandingPageComponent } from './shadow-landing-page/shadow-landing-page.component';
import { ShadowDashboardComponent } from './shadow-dashboard/shadow-dashboard.component';
import { ShadowContextmenuComponent } from './shadow-contextmenu/shadow-contextmenu.component';

@NgModule({
  imports: [
    CommonModule,
    ShadowRoutingModule
  ],
  declarations: [ShadowHeaderComponent, ShadowFooterComponent, ShadowLandingPageComponent, ShadowDashboardComponent, ShadowContextmenuComponent]
})
export class ShadowModule { }
