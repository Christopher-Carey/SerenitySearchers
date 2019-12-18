import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { GeocodeService } from '../geocode.service';
// import { Location } from '../location-model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  // address = "London";
  // location: Location;
  // loading: boolean;
  LocationList;
  TreatmentList;
  constructor(
    private _apiService: ApiService,
    // private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.getApisFromService();

  }
  getApisFromService() {
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay", results)
      this.LocationList = results['results']
      console.log("Location List: "+this.LocationList)
    })
  }
  // getTreatmentFromService() {
  //   let observable = this._apiService.getApisT();
  //   observable.subscribe(results => {
  //     console.log("yay", results)
  //     this.TreatmentList = results['results']
  //   })
  // }

}