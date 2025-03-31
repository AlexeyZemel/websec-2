import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Station} from "../services/api.service";
import {SelectButtonComponent} from "../select-button/select-button.component";

@Component({
  selector: 'app-station-card',
  standalone: true,
  imports: [
    SelectButtonComponent
  ],
  templateUrl: './station-card.component.html',
  styleUrl: './station-card.component.css'
})
export class StationCardComponent {
  @Input() station!: Station;
  @Output() stationSelected = new EventEmitter<string>();

  onStationSelected(code: string) {
    this.stationSelected.emit(code);
  }
}
