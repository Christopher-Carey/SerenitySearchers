import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { GeocodeService } from './geocode.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ShowComponent } from './show/show.component';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowComponent,
    MapComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDnHsaL-gDqFJsnBOzVVB0fLvWJSpJGtNc'
    })

  ],
  providers: [
    ApiService,
    GeocodeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }






