import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrakenStandUp2Component } from './kraken-stand-up2.component';

describe('KrakenStandUp2Component', () => {
  let component: KrakenStandUp2Component;
  let fixture: ComponentFixture<KrakenStandUp2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrakenStandUp2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenStandUp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
