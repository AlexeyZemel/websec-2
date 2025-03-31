import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

export interface Station {
  title: string;
  code: string;
  transport_type: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000';
  private stationsCache: any[] | null = null;

  constructor(private http: HttpClient) {
    this.getAllStations();
  }

  getAllStations(): Observable<any> {
    if (this.stationsCache) {
      return of({ stations: this.stationsCache });
    }
    return this.http.get<{ stations: any[] }>(`${this.apiUrl}/allStations`).pipe(
      tap(data => this.stationsCache = data.stations)
    );
  }

  getSchedule(stationCode: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/schedule`, { params: { station: stationCode } });
  }

  getNearestStations(lat: number, lng: number, distance: number = 50): Observable<any> {
    return this.http.get(`${this.apiUrl}/nearestStations`, { params: { lat, lng, distance } });
  }

  searchRoutes(from: string, to: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/searchRoutes`, { params: { from, to } });
  }
}
