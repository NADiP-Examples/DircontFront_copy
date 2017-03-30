import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import * as _ from "lodash";

import { Observable } from 'rxjs/Rx';
import { AuthService } from 'app/services/auth.service'
import { environment } from 'environments/environment';


//EXAMPLE:
// <location (countryOut)="country = $event" (regionOut)="region = $event" (cityOut)="city = $event"
// [country]="country" [region]="region" [city]="city"></location>

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
})
export class LocationComponent {
  private headers: Headers;
  private _hasRegions: boolean = false;

  private _country: Number = NaN;
  private _region: Number = NaN;
  private _city: Number = NaN;

  private _countries: Array<any> = [];
  private _regions: Array<any> = [];
  private _cities: Array<any> = [];

  @Input()
  set country(country: Number) {
    this._country = country;
  }
  @Input()
  set region(region: Number) {
    this._region = region;
  }

  @Input()
  set city(city: Number) {
    this._city = city;
  }

  @Output() countryOut = new EventEmitter<Number>();
  @Output() regionOut = new EventEmitter<Number>();
  @Output() cityOut = new EventEmitter<Number>();

  constructor(private http: Http, private AuthService: AuthService) {
    this.headers = this.AuthService.getHeaders();
    this.getCountries().subscribe(countries => {
      this._countries = countries;
      this.initCountry();
      if (this._hasRegions) this.getCities(this._region, true).subscribe(cities => this._cities = cities);
    });
  }

  private outData() {
    this.countryOut.next(this._country);
    this.regionOut.next(this._region);
    this.cityOut.next(this._city);
  }

  private initCountry(): void {
    let country = _.find(this._countries, country => country.id === this._country);
    if (_.isUndefined(country)) return;
    this._hasRegions = country.has_regions;

    if (country.has_regions)
      this.getRegions(country.id).subscribe(regions => this._regions = regions);
    else
      this.getCities(country.id).subscribe(cities => this._cities = cities);
  }

  private changeCountry(): void {
    this._region = NaN;
    this._city = NaN;
    this._regions = [];
    this._cities = [];

    this.outData();
    this.initCountry()
  }

  private changeRegion(): void {
    this._city = NaN;
    this._cities = [];

    this.outData();
    this.getCities(this._region, true).subscribe(cities => this._cities = cities);
  }

  private changeCity(): void {
    this.outData();
  }

  private getCountries(): Observable<any> {
    return this.http.get(`${environment.api_url}/locations/countries`, { headers :this.headers })
      .map(response => response.json())
  }

  private getRegions(country_id: Number): Observable<any> {
    return this.http.get(`${environment.api_url}/locations/country/${country_id}/regions`, { headers :this.headers })
      .map(response => response.json())
  }

  private getCities(id: Number, isHasRegions: boolean = false): Observable<any> {
    let parent = isHasRegions ? `region` : `country`;
    return this.http.get(`${environment.api_url}/locations/${parent}/${id}/cities`, { headers :this.headers })
      .map(response => response.json())
  }

}
