import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  LocationList;
  Day;
  constructor(
    private _apiService: ApiService,
  ) { }

  ngOnInit() {
    this.Day={
      day:""
    }
    this.getLocationsFromService()
  }
    switchMaps(){
      
    }
    getLocationsFromService(){
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay",results)
      this.LocationList = results['results']
      this._apiService.getApis()
    })
  }
    getDayFromService(day){
    console.log(day)
    let observable = this._apiService.getDay(day);
    observable.subscribe(results => {
      console.log("yay",results)
      this.LocationList = results['results']
      this._apiService.getApis()
    })
  }


}
