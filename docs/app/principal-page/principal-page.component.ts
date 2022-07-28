import { Component, OnInit } from '@angular/core';
import  { ActivatedRoute, Router } from '@angular/router'
import { CountryWorldMapComponent } from '../country-world-map/country-world-map.component';
import { InstrumentsContentComponent } from '../instruments-content/instruments-content.component';
import { SideMenuInstrumentsComponent } from '../side-menu-instruments/side-menu-instruments.component';
import { SideMenuSongComponent } from '../side-menu-song/side-menu-song.component';
import { SongContentComponent } from '../song-content/song-content.component';
import { InstrumentMainPageComponent } from '../instrument-main-page/instrument-main-page.component';
import { SharedService } from '../shared/shared.service';
import { SideMenuInstrumentMainPageComponent } from '../side-menu-instrument-main-page/side-menu-instrument-main-page.component';
import * as instrumentsJson from '../instruments.json';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  pageType: string = "";
  gridItems: any = null;

  dummyComponentSideMenu = SideMenuInstrumentsComponent;
  dummyComponent = InstrumentsContentComponent;
  dummyComponentWorldMap = CountryWorldMapComponent;

  centerA: any = null;
  centerB: any = null;

  lightMode: boolean = false;
  icon:any =null;
  currColor:string = '3px solid white'; 

  instruList: Instrument[] = [];

  instruNames: string[] = [];
  public dataToLoad: any = instrumentsJson;

  constructor(private router: ActivatedRoute, private router2: Router, public sharedData: SharedService) { }

  ngOnInit(): void {

    this.getInstrumentsNames();

    this.icon = document.getElementById('icon'); 
    document.getElementById('global-theme')!.setAttribute('href', '../../assets/dark.css');

    this.centerA = document.getElementById("centerA");
    this.centerB = document.getElementById("centerB");
    
    this.gridItems = Array.from(document.getElementsByClassName("grid-item") as HTMLCollectionOf<HTMLElement>);
    this.router.queryParams.subscribe((params: any) => this.pageType = params.data)
    
    this.updateSelectedPage();
    
  }

  goToHomePage():void {
    this.router2.navigate([`homepage`]);
  }

  goToSelectedPage(event: any):void {
    this.sharedData.setInstrument("none");
    for(var i = 0; i < this.gridItems.length; i++){
      if(this.gridItems[i].style.borderBottom === this.currColor){
        this.gridItems[i].style.borderBottom = "none";
      }
    }

    this.pageType = event.target.innerText.substring(10); 
    event.target.style.borderBottom = this.currColor
   
    if(this.pageType === "Instruments"){
      this.dummyComponent = InstrumentsContentComponent;
      this.dummyComponentSideMenu = SideMenuInstrumentsComponent;
      this.centerA.style.visibility = 'hidden';
      this.centerB.style.visibility = 'visible';

    } else if(this.pageType === "Country") {
      this.centerA.style.visibility = 'visible';
      this.centerB.style.visibility = 'hidden';
      //this.dummyComponent = CountryContentComponent;
      //this.dummyComponentSideMenu = SideMenuCountryComponent;

    } else if(this.pageType === "Songs") {
      this.dummyComponent = SongContentComponent;
      this.dummyComponentSideMenu = SideMenuSongComponent;
      this.centerA.style.visibility = 'hidden';
      this.centerB.style.visibility = 'visible';

    }
  }
  
  changeTheme():void { 

    if(this.lightMode==false){
      document.getElementById('global-theme')!.setAttribute('href', '../../assets/light.css');
      this.icon!.innerHTML = "&#xef44";
      this.lightMode=true;
      this.currColor = "3px solid black";
    }else{
      document.getElementById('global-theme')!.setAttribute('href', '../../assets/dark.css');
     this.icon!.innerHTML =  "&#xe518";
      this.lightMode=false;
      this.currColor = "3px solid white";
    }
    this.updateSelectedPage();
  
  }

  updateSelectedPage() { 
    console.log(this.pageType);
    if(this.pageType === "Instruments"){
      this.gridItems[1].style.borderBottom = this.currColor;    
      this.centerA.style.visibility = 'hidden';
      this.centerB.style.visibility = 'visible';

      this.dummyComponent = InstrumentsContentComponent;
      this.dummyComponentSideMenu = SideMenuInstrumentsComponent;
      
    } else if(this.pageType === "Country") {
      this.gridItems[2].style.borderBottom =  this.currColor;  
      this.centerA.style.visibility = 'visible';
      this.centerB.style.visibility = 'hidden';
      //this.dummyComponent = CountryContentComponent; //é preciso isto acontecer para que o audio pare
      //this.dummyComponentSideMenu = SideMenuCountryComponent;

    } else {
      this.gridItems[3].style.borderBottom =  this.currColor;  
      this.centerA.style.visibility = 'hidden';
      this.centerB.style.visibility = 'visible';

      this.dummyComponent = SongContentComponent;
      this.dummyComponentSideMenu = SideMenuSongComponent;
    }
  }
  
  ngDoCheck(): void {
    this.sharedData.getInstrument().subscribe((instru: string) => {
      if(this.instruNames.includes(instru)) {
            this.dummyComponent = InstrumentMainPageComponent;
            this.dummyComponentSideMenu = SideMenuInstrumentMainPageComponent;
            this.sharedData.setInstrumentsWithDetails(this.instruList);
      }
    });
  }

  getInstrumentsNames() {    
    for(var i = 0; i < this.dataToLoad.strings.length; i++){
      const inst = {} as Instrument;

      inst.name = this.dataToLoad.strings[i].name;
      inst.type = "strings";
      inst.country = this.dataToLoad.strings[i].country;
      inst.text = this.dataToLoad.strings[i].text;
      inst.photo = this.dataToLoad.strings[i].photo;
      inst.audio = this.dataToLoad.strings[i].audio;
      
      this.instruList.push(inst);
    }

    for(var i = 0; i < this.dataToLoad.winds.length; i++){
      const inst = {} as Instrument;

      inst.name = this.dataToLoad.winds[i].name;
      inst.type = "winds";
      inst.country = this.dataToLoad.winds[i].country;
      inst.text = this.dataToLoad.winds[i].text;
      inst.photo = this.dataToLoad.winds[i].photo;
      inst.audio = this.dataToLoad.winds[i].audio;
      
      this.instruList.push(inst);
    }

    for(var i = 0; i < this.dataToLoad.percussion.length; i++){
      const inst = {} as Instrument;

      inst.name = this.dataToLoad.percussion[i].name;
      inst.type = "percussion";
      inst.country = this.dataToLoad.percussion[i].country;
      inst.text = this.dataToLoad.percussion[i].text;
      inst.photo = this.dataToLoad.percussion[i].photo;
      inst.audio = this.dataToLoad.percussion[i].audio;
      
      this.instruList.push(inst);
    }

    for(var i = 0; i < this.dataToLoad.strings.length; i++){
      this.instruNames.push(this.dataToLoad.strings[i].name);
    }

    for(var i = 0; i < this.dataToLoad.winds.length; i++){
      this.instruNames.push(this.dataToLoad.winds[i].name);
    }

    for(var i = 0; i < this.dataToLoad.percussion.length; i++){
      this.instruNames.push(this.dataToLoad.percussion[i].name);
    }
  }
}



export interface Instrument {
  name: string;
  type: string;
  country: string;
  text: string;
  photo: string;
  audio: string;
}


