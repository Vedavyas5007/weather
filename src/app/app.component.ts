import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { WeatherService } from './services/weather.service';
import { log } from 'node:console';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  providers: [WeatherService]
})
export class AppComponent {
  title = 'weather';

  city: string = '';
  dcity: string = '';
  tempC: string = '';
  tempF: string = ''; 
  humidity: string = '';
  wind: string = '';
  image: string = '';

  cityText(event: Event) {
    this.city = (event.target as HTMLInputElement).value;
  }

  constructor(private weatherService: WeatherService) {
    
  }
  myWeather() {
   this.weatherService.getWeather(this.city)
   .then(data => {
    console.log(data)
    this.image = data.current.condition.icon;
    this.dcity = data.location.name;
    this.tempC = data.current.temp_c;
    this.tempF = data.current.temp_f;
    this.humidity = data.current.humidity;
    this.wind = data.current.wind_kph;
   }).catch(err => {
     alert('City not found');
  });
} 

}
