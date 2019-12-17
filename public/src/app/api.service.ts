import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public _http: HttpClient) { }
  getApis(){
    return this._http.get('/api/quote');
  }
  getApisL(){
    return this._http.get('/api/location');
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

