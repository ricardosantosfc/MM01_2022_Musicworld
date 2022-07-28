import { Component, OnInit } from '@angular/core';
import { Instrument } from '../principal-page/principal-page.component';
import { SharedService } from '../shared/shared.service';
import * as instrumentsJson from '../instruments.json';

@Component({
  selector: 'app-instrument-main-page',
  templateUrl: './instrument-main-page.component.html',
  styleUrls: ['./instrument-main-page.component.css']
})
export class InstrumentMainPageComponent implements OnInit {
gridItemsInstruments: any = null;
  public currRadioButton:any = 0; 
  public dataToLoad: any = instrumentsJson;
  instrumentsConntainer: any = null;

  instruList: Instrument[] = [];
  instruNames: string[] = [];
  type: string = "";
  newtype: string = "";

  sampleIsPlaying:boolean = false; //para controlo de sons
  audioCurr: any = new Audio('../../assets/test.wav'); //placeholder para n dar erro

  currentInstrument: string = "";
  currentInstrumentDetails: string[] = []; //name, type, country, text, photo, audio
  container: any = null;

  constructor(public sharedData: SharedService) { }

  ngOnInit(): void {
    this.getInstrumentsNames();

    this.sharedData.getInstrument().subscribe((instru: string) => {
      this.currentInstrument = instru;
    });

    for(var i = 0; i < this.instruList.length; i++){
      if(this.currentInstrument === this.instruList[i].name){
        this.currentInstrumentDetails.push(this.instruList[i].name);
        this.currentInstrumentDetails.push(this.instruList[i].type);
        this.currentInstrumentDetails.push(this.instruList[i].country);
        this.currentInstrumentDetails.push(this.instruList[i].text);
        this.currentInstrumentDetails.push(this.instruList[i].photo);
        this.currentInstrumentDetails.push(this.instruList[i].audio);
      }
    }


    this.container = document.getElementsByClassName("container");
    
    const header = document.createElement('p');
    header.className = 'instrumentHeader';
    header.innerHTML = this.currentInstrumentDetails[0];
    header.style.fontSize = "30px";
    //header.style.color = "white";
    header.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    header.style.fontWeight = "bolder";
    header.style.marginTop = "0";
    header.classList.add("text");
    
    this.container[1].appendChild(header);

    const text = document.createElement('p');
    text.className = 'instrumentHeader';
    text.innerHTML = this.currentInstrumentDetails[3];
    text.style.fontSize = "15px";
    //text.style.color = "white";
    text.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    text.style.fontWeight = "lighter";
    text.style.marginTop = "0";
    text.style.marginRight = "60px";
    text.classList.add("text");

    this.container[1].appendChild(text);

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

  ngDoCheck(): void {
    this.sharedData.getInstrument().subscribe((instru: string) => {
      if(this.instruNames.includes(instru)) {
        var texts = document.getElementsByClassName("text");
        texts[0].innerHTML = instru;
        for(var i = 0; i < this.instruList.length; i++){
          if(this.instruList[i].name === instru)
            texts[1].innerHTML = this.instruList[i].text;
        } 
      }
    });
  }

  goToInstrumentPageContent(): void {   
  }

  randomArrayShuffle(array: Instrument[]): Instrument[] {
    return [];
  }

  reloadFilter() {
 
  }
  
  ngOnDestroy(){
    
  }

}
