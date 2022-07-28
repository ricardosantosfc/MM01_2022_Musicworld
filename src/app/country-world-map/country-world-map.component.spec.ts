import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryWorldMapComponent } from './country-world-map.component';

describe('CountryWorldMapComponent', () => {
  let component: CountryWorldMapComponent;
  let fixture: ComponentFixture<CountryWorldMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryWorldMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryWorldMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
