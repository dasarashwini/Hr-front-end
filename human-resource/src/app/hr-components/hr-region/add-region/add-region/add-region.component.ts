import { Component } from '@angular/core';
import { RegionService } from '../../../../hr-services/hr-region-service/region.service';
import { Router } from '@angular/router';

@Component({
  selector: 'add-region',
  templateUrl: './add-region.component.html',
  styleUrl: './add-region.component.css'
})
export class AddRegionComponent {

  newRegion = {
    regionId:0,
    regionName:""
  }

  constructor(private regionService:RegionService,private router:Router){}

  addNewRegion(){
    // console.log(this.newRegion);
    this.regionService.addNewRegion(this.newRegion).subscribe((response:string)=>console.log(response));
    this.router.navigate(['region']);
  }
}
