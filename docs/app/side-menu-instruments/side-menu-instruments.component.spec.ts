import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuInstrumentsComponent } from './side-menu-instruments.component';

describe('SideMenuInstrumentsComponent', () => {
  let component: SideMenuInstrumentsComponent;
  let fixture: ComponentFixture<SideMenuInstrumentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuInstrumentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuInstrumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
