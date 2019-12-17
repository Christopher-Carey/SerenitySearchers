import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';


@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
  providers: [DatePipe]
})
export class ShowComponent implements OnInit {
  
  QuoteList;
  Quote;
  LocationList;
  constructor(
    private datePipe: DatePipe,
    private _apiService: ApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getApisFromService()
    // this.getLocationsFromService()
    
    var ddMMyyyy = this.datePipe.transform(new Date().toDateString(),"EEEE, MMMM d");
    console.log(ddMMyyyy); //output - 14-02-2019
    this.ApiFromService(ddMMyyyy)
    
  }

  ApiFromService(date){
    let observable = this._apiService.getApi(date);
    observable.subscribe(results => {
      console.log("yay",results)
      this.Quote = results['results']
      console.log(this.Quote)
      // this._apiService.getApi(id)

    })
  }

  getApisFromService(){
    let observable = this._apiService.getApis();
    observable.subscribe(results => {
      console.log("yay",results)
      this.QuoteList = results['results']
      this._apiService.getApis()
    })
  }
  // getLocationsFromService(){
  //   let observable = this._apiService.getApisL();
  //   observable.subscribe(results => {
  //     console.log("yay",results)
  //     this.LocationList = results['results']
  //     this._apiService.getApis()
  //   })
  // }

}
