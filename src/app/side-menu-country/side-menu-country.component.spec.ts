import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuCountryComponent } from './side-menu-country.component';

describe('SideMenuCountryComponent', () => {
  let component: SideMenuCountryComponent;
  let fixture: ComponentFixture<SideMenuCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuCountryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
