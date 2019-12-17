import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  LocationList;
  TreatmentList;
  constructor(
    private _apiService: ApiService,
  ) { }

  ngOnInit() {
    this.getLocationsFromService()
    this.getTreatmentFromService()
  }
    getLocationsFromService(){
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay",results)
      this.LocationList = results['results']
      this._apiService.getApis()
    })
  }
    getTreatmentFromService(){
    let observable = this._apiService.getApisT();
    observable.subscribe(results => {
      console.log("yay",results)
      this.TreatmentList = results['results']
      this._apiService.getApis()
    })
  }

}
