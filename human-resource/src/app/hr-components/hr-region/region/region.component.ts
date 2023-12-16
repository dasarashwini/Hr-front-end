import { Component } from '@angular/core';
import { RegionModel } from '../../../hr-models/hr-region-model/region-model';
import { RegionService } from '../../../hr-services/hr-region-service/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'region',
  templateUrl: './region.component.html',
  styleUrl: './region.component.css'
})
export class RegionComponent {

  allRegions:RegionModel[]=[];
  selectedRegion: RegionModel | null = null; 
  regionId!:number;
  

  constructor(private regionService:RegionService,private router:Router){}


  ngOnInit(){
    this.getAllRegions();
  }

  back(){
    this.selectedRegion=null;
  }

  getAllRegions(){
    this.regionService.getAllRegions().subscribe((response:RegionModel[])=>{
      // console.log(response);
      // this.allRegions=response;
      this.allRegions = response;
    });
  }

  getRegionById() {
    this.regionService.getRegionById(this.regionId).subscribe((response: RegionModel) => {
      // console.log(response);
      this.selectedRegion=response;
      
    });
  }

  deleteRegionById(regionId:number){
    this.regionService.deleteRegionById(regionId).subscribe((response:string)=>{
      this.getAllRegions();
    });
  }

  addNewRegion(){
    this.router.navigate(['add-region']);
    this.getAllRegions();
  }

  updateRegion(regionId:number,regionName:string){
    this.router.navigate(['edit-region'], { queryParams: { regionId, regionName }});    
  }

  }





