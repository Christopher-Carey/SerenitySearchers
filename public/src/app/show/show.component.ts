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
  Quote;
  constructor(
    private datePipe: DatePipe,
    private _apiService: ApiService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    var ddMMyyyy = this.datePipe.transform(new Date().toDateString(),"EEEE, MMMM d");
    this.ApiFromService(ddMMyyyy)
  }

  ApiFromService(date){
    let observable = this._apiService.getApi(date);
    observable.subscribe(results => {
      console.log("yay",results)
      this.Quote = results['results']
    })
  }
}
