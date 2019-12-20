import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  LocationList
  constructor(
    public _http: HttpClient,
    ) { }
  getVarr(){
    return this.LocationList;
  }  
  getApis(){
    return this._http.get('/api/quote');
  }
  getDay(day){
    return this._http.get(`/api/location/${day}`,day);
  }
  getApisL(){
    return this._http.get('/api/location');
  }
  getApisT(){
    return this._http.get('/api/treatment');
  }
  getApi(id){
    return this._http.get(`/api/quote/${id}`,id);
  }
  createApi(newApi){
    return this._http.post('/api/serenity/new',newApi);
  }
  deleteApi(id){
    return this._http.delete(`/api/serenity/destroy/${id}`,id);
  }
  updateApi(updateApi){
    return this._http.put(`/api/serenity/update/${updateApi._id}`,updateApi);
  }
}

