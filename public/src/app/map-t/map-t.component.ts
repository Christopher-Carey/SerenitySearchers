import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { FormsModule } from '@angular/forms';
// import { GeocodeService } from '../geocode.service';
// import { Location } from '../location-model';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-map-t',
  templateUrl: './map-t.component.html',
  styleUrls: ['./map-t.component.css']
})
export class MapTComponent implements OnInit {

  constructor(
    private _apiService: ApiService,
    // private geocodeService: GeocodeService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
  }

}
