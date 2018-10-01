import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowFooterComponent } from './shadow-footer.component';

describe('ShadowFooterComponent', () => {
  let component: ShadowFooterComponent;
  let fixture: ComponentFixture<ShadowFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
