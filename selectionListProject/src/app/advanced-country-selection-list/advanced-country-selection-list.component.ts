import { Component, OnInit } from '@angular/core';
import { Country} from "../country.model";

@Component({
  selector: 'app-advanced-country-selection-list',
  templateUrl: './advanced-country-selection-list.component.html',
  styleUrls: ['./advanced-country-selection-list.component.css']
})
export class AdvancedCountrySelectionListComponent implements OnInit {

  private selectedCountry: Country;

  private countries: Country[] = [
    new Country(1, "United States"),
    new Country(2, "Australia"),
    new Country(3, "Canada"),
    new Country(4, "Brazil"),
    new Country(5, "England")
  ];

  constructor() { }

  ngOnInit() {
    this.selectedCountry = this.countries[0];
  }

  compareCountries(country1, country2): boolean {
    return country1 && country2 ? country1.id === country2.id : country1 === country2;
  }
}
