import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CountryModel } from '../../hr-models/hr-country-model/country-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string = "http://localhost:8080/api/v1/country"

  getAllCountries(): Observable<CountryModel[]>{
    return this.httpClient.get<CountryModel[]>(this.baseUrl);
  }

  getCountryById(countryId:string):Observable<CountryModel>{
    const url = `${this.baseUrl}/${countryId}`;
    return this.httpClient.get<CountryModel>(url);
  }

  addNewCountry(newCountry:CountryModel):Observable<string>{
    return this.httpClient.post(this.baseUrl,newCountry,{responseType:'text'});
  }

  deleteRegionById(id:string):Observable<string>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url,{responseType:'text'});
  }

  updateCountry(country:CountryModel):Observable<string>{
    return this.httpClient.put(this.baseUrl,country,{responseType:'text'})
  }



}
