import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegionModel } from '../../hr-models/hr-region-model/region-model';

@Injectable({
  providedIn: 'root'
})
export class RegionService {

                          
  baseUrl:string = "http://localhost:8080/api/v1/region"

  constructor(private httpClient:HttpClient) {} 

  getAllRegions(): Observable<RegionModel[]>{
    return this.httpClient.get<RegionModel[]>(this.baseUrl);
  }

  getRegionById(id:number):Observable<RegionModel>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.get<RegionModel>(url);
  }

  deleteRegionById(id:number):Observable<string>{
    const url = `${this.baseUrl}/${id}`;
    return this.httpClient.delete(url,{responseType:'text'});
  }

  addNewRegion(newRegion:RegionModel):Observable<string>{
    return this.httpClient.post(this.baseUrl,newRegion,{responseType:'text'});
  }
  updateRegion(region:RegionModel):Observable<string>{
    return this.httpClient.put(this.baseUrl,region,{responseType:'text'})
  }
  //Update

  
}
