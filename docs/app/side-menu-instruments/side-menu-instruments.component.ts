import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-side-menu-instruments',
  templateUrl: './side-menu-instruments.component.html',
  styleUrls: ['./side-menu-instruments.component.css']
})
export class SideMenuInstrumentsComponent implements OnInit {
  selected:number = 0;

  radioButtons: any = null;
  type: string = "";

  constructor(public shareRadio: SharedService) { }

  ngOnInit(): void {}

  changeType(): void {
   
    /*
    this.radioButtons = document.getElementsByName("radio");
    for(var i = 0; i < this.radioButtons.length; i++){
      if(this.radioButtons[i].checked)
        this.shareRadio.setDataToContent(this.radioButtons[i].value);
    } */
  }

  switchInstrumentContentComponent(event: any, numb:number):void {
    //console.log(numb);
    this.shareRadio.currRadioSelected.next(numb);
  }
  
}