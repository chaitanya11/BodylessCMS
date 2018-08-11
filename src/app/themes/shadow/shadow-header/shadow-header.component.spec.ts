import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowHeaderComponent } from './shadow-header.component';

describe('ShadowHeaderComponent', () => {
  let component: ShadowHeaderComponent;
  let fixture: ComponentFixture<ShadowHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
