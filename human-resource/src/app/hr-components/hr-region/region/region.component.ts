import { Component } from '@angular/core';
import { RegionModel } from '../../../hr-models/hr-region-model/region-model';
import { RegionService } from '../../../hr-services/hr-region-service/region.service';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent {

  allRegions : RegionModel[] = [];

  constructor(private regionService:RegionService){}

  regionId:number=0;

  search(){
    console.log(this.regionId);
  }

  ngOnInit(){
    this.loadAllRegions();
  }

  loadAllRegions(){
    this.regionService.getAllRegions().subscribe((response)=>{
      console.log(response);
      // this.allRegions=response;
      this.allRegions = response;
    });
  }

  getRegionById(){
    this.regionService.getRegionById().subscribe((response)=>{
      this.allRegions = response;
    })
  }
}
