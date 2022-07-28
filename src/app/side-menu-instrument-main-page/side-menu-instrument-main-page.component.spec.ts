import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuInstrumentMainPageComponent } from './side-menu-instrument-main-page.component';

describe('SideMenuInstrumentMainPageComponent', () => {
  let component: SideMenuInstrumentMainPageComponent;
  let fixture: ComponentFixture<SideMenuInstrumentMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuInstrumentMainPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuInstrumentMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
