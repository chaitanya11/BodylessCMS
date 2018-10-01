import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowContextmenuComponent } from './shadow-contextmenu.component';

describe('ShadowContextmenuComponent', () => {
  let component: ShadowContextmenuComponent;
  let fixture: ComponentFixture<ShadowContextmenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowContextmenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowContextmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
