import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StationService {
  private selectedStationCode = new BehaviorSubject<string | null>(null);
  selectedStationCode$ = this.selectedStationCode.asObservable();

  setStationCode(code: string) {
    this.selectedStationCode.next(code);
    console.log("Код установлен");
  }
}
