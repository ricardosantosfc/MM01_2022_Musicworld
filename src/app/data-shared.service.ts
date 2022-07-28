import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {
  public currRadioSelected: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor() { }
}
