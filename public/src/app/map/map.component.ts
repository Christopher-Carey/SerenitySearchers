import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiService } from '../api.service';
// import { ListComponent } from '../list/list.component'


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  LocationList;
  TreatmentList;
  clicked;
  
  constructor(
    private _apiService: ApiService,
    private ref: ChangeDetectorRef,
    // private listComponent: ListComponent,
  ) { }

  ngOnInit() {
    // this.LocationList = this.listComponent.LocationList
    this.getApisFromService();
  }
  clickedMarker(label: string, index: number) {
    this.clicked = this.LocationList[index]
  }
  getApisFromService() {
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay", results)
      this.LocationList = results['results']
    })
  }


}