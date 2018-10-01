import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowDashboardComponent } from './shadow-dashboard.component';

describe('ShadowDashboardComponent', () => {
  let component: ShadowDashboardComponent;
  let fixture: ComponentFixture<ShadowDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
