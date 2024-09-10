import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {

  public countries:Country[] = [];

  constructor(private CountriesServices: CountriesServices){}

  searchByCountry(country:string):void{
    this.CountriesServices.searchName(country)
      .subscribe(countries => {
        this.countries = countries;
      })
  }

}
