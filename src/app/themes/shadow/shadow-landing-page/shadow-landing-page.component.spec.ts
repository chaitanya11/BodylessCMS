import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowLandingPageComponent } from './shadow-landing-page.component';

describe('ShadowLandingPageComponent', () => {
  let component: ShadowLandingPageComponent;
  let fixture: ComponentFixture<ShadowLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
