import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ApiService, Station} from "../../services/api.service";
import {StationCardComponent} from "../../station-card/station-card.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FormsModule,
    StationCardComponent,
    NgIf
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements  OnInit{
  inputValue: string = '';
  stations: any[] = [];
  station?: Station = undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getAllStations().subscribe(data => {
      this.stations = data.stations;
      console.log(this.stations);
    });
  }

  search() {
    if (!this.stations) this.station = undefined;
    this.station = this.stations.find(st => st.title.toLowerCase() === this.inputValue.toLowerCase() &&
      ['suburban', 'train'].includes(st.transport_type));
    console.log(this.station?.code);
  }
}
