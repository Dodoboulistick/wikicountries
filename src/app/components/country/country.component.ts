import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from 'src/app/services/countries.service';
import { Country } from 'src/app/types/Country';
import { apiKey } from 'apikey';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent {
  country: Country | undefined;
  coord: number[] = [0, 0];
  langs: string[] = [];
  currencies: string[] = [];
  mapsKey = apiKey;

  constructor(private countriesService: CountriesService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.getCountry(params['cca2']);
    });

  }

  async getCountry(cca2: string){
    this.country = await this.countriesService.getCountry(cca2) as Country;
    this.coord = [this.country.latlng[0], this.country.latlng[1]];
    let keys = Object.keys(this.country.languages);
    for (let i = 0; i < keys.length; i++) {
      this.langs.push(this.country.languages[keys[i]]);
    }
    let currencies = Object.keys(this.country.currencies);
    for (let i = 0; i < currencies.length; i++) {
      this.currencies.push(this.country.currencies[currencies[i]].name);
    }

  }
}
