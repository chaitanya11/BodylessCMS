import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShadowRoutingModule } from './shadow-routing.module';
import { ShadowHeaderComponent } from './shadow-header/shadow-header.component';
import { ShadowFooterComponent } from './shadow-footer/shadow-footer.component';
import { ShadowLandingPageComponent } from './shadow-landing-page/shadow-landing-page.component';

@NgModule({
  imports: [
    CommonModule,
    ShadowRoutingModule
  ],
  declarations: [ShadowHeaderComponent, ShadowFooterComponent, ShadowLandingPageComponent]
})
export class ShadowModule { }
