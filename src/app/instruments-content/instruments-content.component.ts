import { BuiltinTypeName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import * as instrumentsJson from '../instruments.json';
import { Instrument } from '../principal-page/principal-page.component';
import { SharedService } from '../shared/shared.service';
import { SideMenuInstrumentsComponent } from '../side-menu-instruments/side-menu-instruments.component';

@Component({
  selector: 'app-instruments-content',
  templateUrl: './instruments-content.component.html',
  styleUrls: ['./instruments-content.component.css']
})
export class InstrumentsContentComponent implements OnInit {

  public currRadioButton:any = 0; 
  public dataToLoad: any = instrumentsJson;
  instrumentsConntainer: any = null;
  gridItemsInstruments: any = null;
  sampleIsPlaying:boolean = false; //para controlo de sons
  audioCurr: any = new Audio('assets/test.wav'); //placeholder para n dar erro

  constructor(public sharedData: SharedService) { //click radio btn passa numero até aqui 0 - all, 1-strings, 2-winds,3-perc
  }

  ngOnInit(): void {
    this.sharedData.currRadioSelected.subscribe( value => {
      this.currRadioButton = value;
      console.log(value);
      console.log(this.audioCurr.setAttribute("idButtonToChange","new"));//quando se muda o filtro , pode aocntere null pointer exception, atribuir valor default para que n aconteca(assume que existe sempre >=1 instrumento)
      this.audioCurr.src = 'assets/test.wav'; //sim é estupido, mas é a maneira mais fácil de parar o audio (pause() ou src=null causa problemas)
      if(this.instrumentsConntainer!=null){ //limpar grid
       const p= document.getElementsByClassName('grid-item-intruments');
        while(p.length > 0){
         p[0].parentNode!.removeChild(p[0]);
        }
       
      }
      this.reloadFilter(); //preenhcer grid 
  });
    
  }

  reloadFilter() {

    //-----------------------------------------------------ir buscar info certa ao json
    console.log("vasj");
    this.instrumentsConntainer = document.getElementsByClassName("grid-container");

    let dataLoad = null;

    if(this.currRadioButton == 0){
      dataLoad = []
      for(var i = 0; i < this.dataToLoad.strings.length; i++){
        const inst = {} as Instrument;
  
        inst.name = this.dataToLoad.strings[i].name;
        inst.type = "strings";
        inst.country = this.dataToLoad.strings[i].country;
        inst.text = this.dataToLoad.strings[i].text;
        inst.photo = this.dataToLoad.strings[i].photo;
        inst.audio = this.dataToLoad.strings[i].audio;
         
        dataLoad.push(inst);
      }
  
      for(var i = 0; i < this.dataToLoad.winds.length; i++){
        const inst = {} as Instrument;
  
        inst.name = this.dataToLoad.winds[i].name;
        inst.type = "winds";
        inst.country = this.dataToLoad.winds[i].country;
        inst.text = this.dataToLoad.winds[i].text;
        inst.photo = this.dataToLoad.winds[i].photo;
        inst.audio = this.dataToLoad.winds[i].audio;
        
        dataLoad!.push(inst);
      }
  
      for(var i = 0; i < this.dataToLoad.percussion.length; i++){
        const inst = {} as Instrument;
  
        inst.name = this.dataToLoad.percussion[i].name;
        inst.type = "percussion";
        inst.country = this.dataToLoad.percussion[i].country;
        inst.text = this.dataToLoad.percussion[i].text;
        inst.photo = this.dataToLoad.percussion[i].photo;
        inst.audio = this.dataToLoad.percussion[i].audio;
        
        dataLoad!.push(inst);
      }        

    }else if(this.currRadioButton ==1){
      dataLoad = this.dataToLoad.strings;
    }else if(this.currRadioButton ==2){
      dataLoad = this.dataToLoad.winds;
    }else{
      dataLoad = this.dataToLoad.percussion;
    }
    dataLoad = this.randomArrayShuffle(dataLoad);
    console.log(dataLoad);
    
    //console.log(this.dataToLoad.all.length);
    for(var i = 0; i < dataLoad.length; i++){
      
      //---------------------------------------------------cria div pai
      const pai = document.createElement('div1');
      pai.style.width = "240px";
      pai.style.height = "240px";
      pai.style.position = "relative"
      pai.style.backgroundPosition = "center";
      pai.style.backgroundSize = "150%";
      pai.classList.add('grid-item-intruments');

      //---------------------------------------------------cria div filho para imagem -el
      const el = document.createElement('div');
      el.style.width = "240px";
      el.style.height = "240px";
      el.style.position = "absolute";
      el.style.backgroundPosition = "center";
      el.style.backgroundSize = "150%";
      el.style.borderRadius=  "2px";
      el.style.backgroundImage = "url(\"" + dataLoad[i].photo + "\")";
      

      //----------------------------------------------cria div filho para play sample + nome do instrumento -desc1
      const desc1 = document.createElement('div2'); 
      desc1.style.width = "240px";
      desc1.style.height = "240px";
      desc1.style.position = "absolute";
      desc1.style.zIndex = "1";
      desc1.style.display = "none";
      desc1.style.borderRadius=  "5px";

      //----------------------------------------------nome do instrumento  -para
      const para = document.createElement("p");
      const node = document.createTextNode(dataLoad[i].name);
      para.appendChild(node);
      para.style.cursor = "pointer";
      desc1.appendChild(para);
      para.style.textAlign= "center";
      para.style.fontWeight= "lighter";
      para.style.fontSize= "25px";
      
      
      //--------------------------------------------botao sample  -imgPlay
      var imgPlay = document.createElement("img"+ i);
      imgPlay.id = "cd" + i; //para ir buscar quando clicked
      imgPlay.style.content= "url('assets/play-button.png')"; 
      imgPlay.style.backgroundSize = "contain";
      imgPlay.style.filter = "invert(1)";
      imgPlay.style.height = "70px";
      imgPlay.style.width = "70px";
      imgPlay.style.zIndex = "2";
      imgPlay.style.cursor = "pointer";
      desc1.appendChild(imgPlay);
      imgPlay.style.position = "absolute";
      imgPlay.style.left = "50%";
      imgPlay.style.transform= "translateX(-50%)";
      imgPlay.style.bottom = "10%";

      var text1 = dataLoad[i].audio;
      imgPlay.innerHTML = text1; //meter o url do audio no innerhtml, maybe nao eh boa pratica, rever
     // pai.appendChild(audio);
      //-----------------------------------------------
      pai.appendChild(desc1);
      pai.appendChild(el);

      //-----------------------------------------------hover-------------------------------------
      pai.onmouseover = function(){ //blur e unblur do div com a imagem background do instrumento
        para.classList.add("toNavigate");
        el.style.transform = "scale(1.05)";
        el.style.backgroundImage = "white";
        el.style.filter=  "blur(10px) brightness(40%) grayscale(60%)"; 
        desc1.style.display = "block";
      }
      pai.onmouseleave = function(){ 
        el.style.transform = "scale(1)";
        el.style.filter ="blur(0px)";
        desc1.style.display = "none";
      }

      //--------------------------------------controlo dos sons------------------------------------
      imgPlay.addEventListener("click",(event) => clickListner(event,text1 )) 
      const clickListner =  (event: MouseEvent, text1: any) => {
      if (event.target instanceof Element){  //event.target = o botao imgPlay que foi clicada
           var clickedSrc = event.target.innerHTML; //ir ao innerhtml buscar src do audio
           var tempAudio = new Audio(clickedSrc); //criar audio novo so para comparar as src asseguir. arranjar isto melhor se tivermos tempo
           
           if(this.sampleIsPlaying==true && this.audioCurr.src == tempAudio.src ){ //clicou no botao que estava a tocar.
             this.audioCurr.pause();
             this.sampleIsPlaying = false;
             this.audioCurr.reload; 
             document.getElementById(event.target.id)!.style.content = "url('assets/play-button.png')"; //alterar o botao 
           
            }else{ //clicou noutro botão ou clicou no mesmo botao após ter parado (pelo if acima ou se acabou por si)
              if(this.audioCurr.src != tempAudio.src &&  this.audioCurr.getAttribute("idButtonToChange")!= null){ //quando corre na primeira vez ainda n ha atributo no audiocurr
                var buttonIdOver = this.audioCurr.getAttribute("idButtonToChange"); // para alterar o botao
                console.log(buttonIdOver);
                if(buttonIdOver!="new"){ //para quando há mudança de filtro
                  document.getElementById(buttonIdOver)!.style.content = "url('assets/play-button.png')";
                }
              }
            this.audioCurr.src = clickedSrc; 
            this.sampleIsPlaying = true;
            this.audioCurr.play();
            document.getElementById(event.target.id)!.style.content = "url('assets/stop.png')";
            this.audioCurr.setAttribute("idButtonToChange", event.target.id); //de modo a conseguir alterar img do botao quando acaba por si, e quando esta a tocar se clica noutro
           }
      }
      
    
    }
      this.instrumentsConntainer[0].appendChild(pai);
    }

    //----------------------------------------------controlo de sons, para saber quadno sample acaba por si
    this.audioCurr.addEventListener("ended",(event1: any) => clickListner(event1, this.audioCurr)) //quando sample toca até ao fim

    const clickListner =  (event:any, audio: HTMLAudioElement) => {
      audio.currentTime = 0;
      //console.log("ended");
      this.sampleIsPlaying=false;
      var buttonIdOver = this.audioCurr.getAttribute("idButtonToChange"); //
      document.getElementById(buttonIdOver)!.style.content = "url('assets/play-button.png')";

    }

    document.addEventListener("click", (elem: any) => {
      console.log(elem.target.classList[0]);
      if(elem.target.classList[0]){
        this.sharedData.setInstrument(elem.target.innerText);
      }
    });
    
  }

  ngDoCheck(): void {
   
  }

  randomArrayShuffle(array: Instrument[]): Instrument[] {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  goToInstrumentPageContent(): void {
    alert();
  }

  ngOnDestroy(){
    this.audioCurr.pause();
    //falata remover? mabybe

  }
}


