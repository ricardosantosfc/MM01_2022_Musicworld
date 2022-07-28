import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentMainPageComponent } from './instrument-main-page.component';

describe('InstrumentMainPageComponent', () => {
  let component: InstrumentMainPageComponent;
  let fixture: ComponentFixture<InstrumentMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
