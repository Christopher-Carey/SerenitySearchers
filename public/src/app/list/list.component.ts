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
  ngOnChanges(){
    this.LocationList= this._apiService.LocationList

  }
    
  getLocationsFromService(){
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay",results)
      this._apiService.LocationList = results['results']
      this.LocationList= this._apiService.LocationList
    })
  }
    getDayFromService(day){
    let observable = this._apiService.getDay(day);
    observable.subscribe(results => {
      console.log("yay",results)
      this._apiService.LocationList = results['results']
      this.LocationList= this._apiService.LocationList

      // this._apiService.getApis()
    })
  }


}
