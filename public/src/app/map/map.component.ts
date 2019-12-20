import { Component, OnInit, ChangeDetectorRef,AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiService } from '../api.service';
import { mapToMapExpression } from '@angular/compiler/src/render3/util';
import { AgmMap } from '@agm/core';



@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  LocationList;
  TreatmentList;
  clicked;
  clickbool=false;

  constructor(
    private _apiService: ApiService,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit() {
    setTimeout(() => { this.getVar(), console.log("World!"); }, 5000);
    // this.getApisFromService();


    
  }
  ngOnChanges(){
    
  }
  ngDoCheck() {
    this.getVar()
    // location.reload()
    console.log("test")
  }
 
  ngAfterViewInit(){

  }
  clickedMarker(label: string, index: number) {
    this.clicked = this.LocationList[index]
    this.clickbool = true;
  }
  getApisFromService() {
    let observable = this._apiService.getApisL();
    observable.subscribe(results => {
      console.log("yay", results)
      this.LocationList = results['results']
      // this.getvar();
    })
  }
  getVar() {
    this.LocationList = this._apiService.getVarr();
  }



}