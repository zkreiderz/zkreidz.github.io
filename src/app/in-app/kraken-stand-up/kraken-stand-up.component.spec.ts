import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IgxButtonModule } from 'igniteui-angular';
import { KrakenStandUpComponent } from './kraken-stand-up.component';

describe('KrakenStandUpComponent', () => {
  let component: KrakenStandUpComponent;
  let fixture: ComponentFixture<KrakenStandUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrakenStandUpComponent ],
      imports: [ NoopAnimationsModule, FormsModule, IgxButtonModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KrakenStandUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
