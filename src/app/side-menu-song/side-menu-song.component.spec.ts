import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuSongComponent } from './side-menu-song.component';

describe('SideMenuSongComponent', () => {
  let component: SideMenuSongComponent;
  let fixture: ComponentFixture<SideMenuSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideMenuSongComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideMenuSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
