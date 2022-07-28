import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Instrument } from '../principal-page/principal-page.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public currRadioSelected: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  message: string = "all";
  instru: string = "none";
  instruList: Instrument[] = [];

  constructor() {}

  setDataToContent(data: string): void {
    this.message = data;
  }

  getData(): Observable<any> {
    return of(this.message);
  }

  setInstrument(instru: string): void {
    this.instru = instru;
  }

  getInstrument(): Observable<any> {
    return of(this.instru);
  }

  setInstrumentsWithDetails(instruments: Instrument[]): void{
    this.instruList = instruments;
  }

  getInstruLitDetails(): Instrument[] {
    return this.instruList;
  }
}
