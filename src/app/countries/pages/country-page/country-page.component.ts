import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesServices } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit{

  constructor(private activateRoute: ActivatedRoute,
    private CS:CountriesServices){}

  ngOnInit(): void {
    this.activateRoute.params
      .subscribe(({id}) =>{
        this.CS.searchCountryByAlphaCode(id)
          .subscribe(country => {
            console.log(country);

          })
        // console.log({params: id});
      });
  }

}
