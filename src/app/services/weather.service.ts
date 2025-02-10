import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  weatherDetails: any;
  private apiKey = 'Add your API key here';
  private url = 'http://api.weatherapi.com/v1/current.json';

  constructor(private http: HttpClient) { }

  getWeather(city: string) : Promise<any> {
    return this.http.get(`${this.url}?key=${this.apiKey}&q=${city}`).toPromise();
  }
}
