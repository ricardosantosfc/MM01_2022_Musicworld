import { Component, OnInit } from '@angular/core';
import { Instrument } from '../principal-page/principal-page.component';
import { SharedService } from '../shared/shared.service';
import * as instrumentsJson from '../instruments.json';

@Component({
  selector: 'app-side-menu-instrument-main-page',
  templateUrl: './side-menu-instrument-main-page.component.html',
  styleUrls: ['./side-menu-instrument-main-page.component.css']
})
export class SideMenuInstrumentMainPageComponent implements OnInit {
  selected:number = 0;
  radioButtons: any = null;
  type: string = "";
  currentInstrument: string = "";

  instruList: Instrument[] = [];
  types: string[] = ["strings", "winds", "percussion"];
  public dataToLoad: any = instrumentsJson;
  container: any = null;

  constructor(public shareRadio: SharedService) { }

  ngOnInit(): void {
    this.getInstrumentsNames();

    this.shareRadio.getInstrument().subscribe((instru: string) => {
      this.currentInstrument = instru;
    });

    //Build List
    this.container = document.getElementsByClassName("containerA");
    for(var i = 0; i < this.types.length; i++){
      const header = document.createElement('p');
      header.className = 'instrumentHeader';
      header.innerHTML = this.types[i].charAt(0).toUpperCase() + this.types[i].slice(1);
      header.style.fontSize = "20px";
      //header.style.color = "white";
      header.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
      header.style.fontWeight = "bolder";
      header.style.margin = "0";
      
      this.container[0].appendChild(header);

      for(var j = 0; j < this.instruList.length; j++){
        if(this.instruList[j].type == this.types[i]){
          const item = document.createElement('p');
          item.innerHTML = this.instruList[j].name;
          item.style.fontSize = "15px";
          //item.style.color = "white";
          item.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
          item.style.fontWeight = "lighter";
          item.style.margin = "0";
          item.style.marginLeft = "20px";
          item.classList.add("itemInstru");

          if(this.instruList[j].name === this.currentInstrument){
            item.style.fontWeight = "bolder";
          }
          
          this.container[0].appendChild(item);
        }
      }
      const item = document.createElement('p');
      item.innerHTML = "&nbsp;"
     // item.className = 'instrumentHeader';
      item.style.fontSize = "15px";
      item.style.color = "white";
      item.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
      item.style.fontWeight = "lighter";
      item.style.margin = "0";
      item.style.marginLeft = "20px";
      
      this.container[0].appendChild(item);


      document.addEventListener("click", (elem: any) => {
        if(elem.target.classList[0] === "itemInstru"){
          var elemTolight = Array.from(
            document.getElementsByClassName("itemInstru") as HTMLCollectionOf<HTMLElement>,
          ); 
          

          for(var i  = 0; i < elemTolight.length; i++) {
            if(elemTolight[i].innerHTML === this.currentInstrument){
              elemTolight[i].style.fontWeight = "lighter";
            }
          }

          elem.target.style.fontWeight = "bolder";
          this.currentInstrument = elem.target.innerText;
          this.shareRadio.setInstrument(elem.target.innerText);
        }
      });

    }
    

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
  }
  switchInstrumentContentComponent(event: any, numb:number):void {
   
  }
  changeType(): void {}

}
