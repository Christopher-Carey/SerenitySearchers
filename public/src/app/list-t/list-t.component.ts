import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list-t',
  templateUrl: './list-t.component.html',
  styleUrls: ['./list-t.component.css']
})
export class ListTComponent implements OnInit {
  TreatmentList;


  constructor(
    private _apiService: ApiService,

  ) { }

  ngOnInit() {
    this.getTreatmentFromService()

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
