import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentsContentComponent } from './instruments-content.component';

describe('InstrumentsContentComponent', () => {
  let component: InstrumentsContentComponent;
  let fixture: ComponentFixture<InstrumentsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
