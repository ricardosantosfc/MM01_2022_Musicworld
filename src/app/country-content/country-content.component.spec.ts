import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryContentComponent } from './country-content.component';

describe('CountryContentComponent', () => {
  let component: CountryContentComponent;
  let fixture: ComponentFixture<CountryContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
