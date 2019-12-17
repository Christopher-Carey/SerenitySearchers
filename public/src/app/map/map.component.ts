import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { GeocodeService } from '../geocode.service';
import { Location } from '../location-model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  address = "London";
  location: Location;
  loading: boolean;
  markers = []
  LocationList;
  constructor(
    private _apiService: ApiService,

    private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
  ) { }



  ngOnInit() {
    this.getApisFromService();

  }
  
  addressToCoordinates() {
    this.loading = true;
    this.geocodeService.geocodeAddress(this.address)
      .subscribe((location: Location) => {
        this.location = location;
        this.loading = false;
        this.ref.detectChanges();
        this.markers.push(location)
        console.log(location)
        console.log(this.markers)


      });
  }
  getApisFromService() {
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay", results)
      this.LocationList = results['results']
      this._apiService.getApis()
      console.log(this.LocationList)
      for (var i = 0; i < 100; i++) {
        // setTimeout(function () {
          this.address = this.LocationList[i].Address+" "+this.LocationList[i].City
          this.addressToCoordinates();
        // }, 3000)




      }
    })
  }

}














