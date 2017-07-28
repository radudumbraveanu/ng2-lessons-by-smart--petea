import { Component, OnInit } from "@angular/core";
import { Country} from "../country.model";

@Component({
  selector: 'app-sample-country-selection-list',
  templateUrl: './sample-country-selection-list.component.html',
  styleUrls: ['./sample-country-selection-list.component.css']
})
export class SampleCountrySelectionListComponent implements OnInit {

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

  updateSelectedValue(event: string): void {
    this.selectedCountry = this.countries.find(c => c.id === parseInt(event));
  }
}
