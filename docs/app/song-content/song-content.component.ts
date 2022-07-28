import { Component, OnInit } from '@angular/core';
import { Instrument } from '../principal-page/principal-page.component';
import { SharedService } from '../shared/shared.service';
import { SideMenuInstrumentsComponent } from '../side-menu-instruments/side-menu-instruments.component';

@Component({
  selector: 'app-song-content',
  templateUrl: './song-content.component.html',
  styleUrls: ['./song-content.component.css']
})
export class SongContentComponent implements OnInit {

  //not used here
  dataToLoad: any[] = [];
  gridItemsInstruments: any = null;
  instrumentsConntainer: any = null;

  instruList: Instrument[] = [];
  type: string = "";
  newtype: string = "";

  public sampleIsPlaying:any = false;
  playClicked: any = null; 
  
  public currRadioButton:any = 0;
  audioCurr = new Audio('../../assets/test.wav');

  constructor(public sharedData: SharedService) { }

  ngOnInit(): void {
  }

  ngDoCheck(): void {}

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
