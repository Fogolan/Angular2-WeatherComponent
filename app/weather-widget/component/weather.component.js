"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require('@angular/core');
const weather_service_1 = require('../service/weather.service');
const weather_1 = require('../model/weather');
let WeatherComponent = class WeatherComponent {
    constructor(service) {
        this.service = service;
        this.weatherData = new weather_1.Weather(null, null, null, null, null);
    }
    ngOnInit() {
        this.getCurrentLocation();
    }
    getCurrentLocation() {
        this.service.getCurrentLocation()
            .subscribe(position => {
            this.pos = position;
            this.getCurrentWeather();
        }, err => console.error(err));
    }
    getCurrentWeather() {
        this.service.getCurrentWeather(this.pos.coords.latitude, this.pos.coords.longitude)
            .subscribe(weather => {
            this.weatherData.temp = weather["currently"]["temperature"],
                this.weatherData.summary = weather["currently"]["summary"],
                this.weatherData.wind = weather["currently"]["windSpeed"],
                this.weatherData.humidity = weather["currently"]["humidity"],
                this.weatherData.icon = weather["currently"]["icon"];
            console.log(this.weatherData);
        }, err => console.error(err));
    }
};
WeatherComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'weather-widget',
        templateUrl: 'weather.component.html',
        styleUrls: ['weather.component.css'],
        providers: [weather_service_1.WeatherService]
    }), 
    __metadata('design:paramtypes', [weather_service_1.WeatherService])
], WeatherComponent);
exports.WeatherComponent = WeatherComponent;
//# sourceMappingURL=weather.component.js.map