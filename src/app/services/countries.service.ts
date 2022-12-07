import { Injectable } from '@angular/core';
import { Country } from '../types/Country';
import { Method } from '../types/Method';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor() { }

  async getData(endpoint: string = '/', method: Method = 'GET', options ? : any){
    return await fetch(`https://restcountries.com/v3.1${endpoint}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(options),
    }).then(response => response.json());
  }



  async getAllCountries(): Promise<Country[]> {
    const countries = await this.getData('/all');
    return countries;
  }

  async getCountry(cca2: string): Promise<Country> {
    const country: Country = (await this.getData(`/alpha/${cca2}`))[0] as Country;
    return country;
  }


}
