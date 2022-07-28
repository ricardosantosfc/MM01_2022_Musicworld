import { Component, OnInit } from '@angular/core';
import  { Router } from '@angular/router';
import { SharedService } from '../shared/shared.service';


@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  vid:any = null;
  hypInfo:any = null;
  currInstrument:any = null;
  constructor(private router: Router, public sharedData: SharedService) { }

  ngOnInit(): void {
    this.sharedData.setInstrument("");
    this.hypInfo = document.getElementById('hypervideo-info');
      
    var menuItems = document.getElementsByClassName("menu");
    var routerAux = this.router;
    for(var i = 0; i < menuItems.length; i++){
      (function () {
        var pageType = menuItems[i].className.substring(5);
        menuItems[i].addEventListener("click", () => {
          routerAux.navigate([`principalpage`], {queryParams: {data: pageType}});
        });
      }());
    }
  }
  goToSelectedPage(event :any):void{
    console.log(this.currInstrument);
    this.sharedData.setInstrument(this.currInstrument);
    var pageType = "Instruments";
    this.router.navigate([`principalpage`], {queryParams: {data: pageType}});
  }
  getCurrentTime(data: any): void {
    var currTime = data.target.currentTime
     //console.log(data.target.currentTime);
     //console.log(this.hypInfo.innerHTML);
     if(currTime>=0 && currTime< 14){
       this.hypInfo.innerHTML = "Click on the video now to learn more about the Brinquinho";
       this.currInstrument ="Brinquinho";
     }else if(currTime>=14 && currTime< 28){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Shamisen";
      this.currInstrument ="Shamisen";
     }else if(currTime>=28 && currTime< 44.5){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Gaita Mirandesa";
      this.currInstrument ="Gaita Mirandesa";
     }else if(currTime>=44.5 && currTime< 64.2){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Sho";
      this.currInstrument ="Sho";
    }else if(currTime>=64.2 && currTime< 78){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Adufe";
      this.currInstrument ="Adufe";
    }else if(currTime>=78 && currTime< 89.7){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Shinobue";
      this.currInstrument ="Shinobue";
    }else if(currTime>=89.7 && currTime< 102.8){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Viola da Terra";
      this.currInstrument ="Viola da Terra";
    }else if(currTime>=102.8 && currTime< 111.8){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Binzasara";
      this.currInstrument ="Binzasara";
    }else if(currTime>=111.8 && currTime< 125.9){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Cavaquinho";
      this.currInstrument ="Cavaquinho";
    }else if(currTime>=125.9 && currTime< 138.2){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Shime-daiko";
      this.currInstrument ="Shime-daiko";
    }else if(currTime>=138.2 && currTime< 150.7){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Guitarra Portuguesa";
      this.currInstrument ="Guitarra Portuguesa";
    }else if(currTime>=150.7 && currTime< 164){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Koto";
      this.currInstrument ="Koto";
    }else if(currTime>=164 && currTime< 179.5){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Viola Braguesa";
      this.currInstrument ="Viola Braguesa";
    }else if(currTime>=179.5 && currTime< 192.2){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Tsuzumi";
      this.currInstrument ="Tsuzumi";
    }else if(currTime>=192.2 && currTime< 205.5){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Biwa";
      this.currInstrument ="Biwa";
    }else if(currTime>=205.5 && currTime< 217.9){
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Nohkan";
      this.currInstrument ="Nohkan";
    }else{
      this.hypInfo.innerHTML = "Click on the video now to learn more about the Nagado-daiko";
      this.currInstrument ="Nagado-daiko";
    }


}

}
