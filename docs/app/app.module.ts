import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { PrincipalPageComponent } from './principal-page/principal-page.component';
import { SideMenuInstrumentsComponent } from './side-menu-instruments/side-menu-instruments.component';
import { SideMenuCountryComponent } from './side-menu-country/side-menu-country.component';
import { SideMenuSongComponent } from './side-menu-song/side-menu-song.component';
import { InstrumentsContentComponent } from './instruments-content/instruments-content.component';
import { CountryContentComponent } from './country-content/country-content.component';
import { SongContentComponent } from './song-content/song-content.component';
import { CountryWorldMapComponent } from './country-world-map/country-world-map.component';
import { InstrumentMainPageComponent } from './instrument-main-page/instrument-main-page.component';
import { SideMenuInstrumentMainPageComponent } from './side-menu-instrument-main-page/side-menu-instrument-main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MainMenuComponent,
    PrincipalPageComponent,
    SideMenuInstrumentsComponent,
    SideMenuCountryComponent,
    SideMenuSongComponent,
    InstrumentsContentComponent,
    CountryContentComponent,
    SongContentComponent,
    CountryWorldMapComponent,
    InstrumentMainPageComponent,
    SideMenuInstrumentMainPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
