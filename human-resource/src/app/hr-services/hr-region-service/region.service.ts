import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegionService {


  baseUrl:string = "http://localhost:8080/api/v1/region"

  constructor(private httpClient:HttpClient) { }

  

 

  getAllRegions(): Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl);
  }

  getRegionById():Observable<any[]>{
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}
