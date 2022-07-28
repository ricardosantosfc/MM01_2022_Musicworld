import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/shared.service';

@Component({
  selector: 'app-side-menu-song',
  templateUrl: './side-menu-song.component.html',
  styleUrls: ['./side-menu-song.component.css']
})
export class SideMenuSongComponent implements OnInit {
  selected:number = 0;
  radioButtons: any = null;
  type: string = "";

  constructor(public shareRadio: SharedService) { }

  ngOnInit(): void {}

  changeType(): void {}

  switchInstrumentContentComponent(event: any, numb:number):void {
   
  }
}
