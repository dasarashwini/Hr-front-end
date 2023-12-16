import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RegionModel } from '../../../hr-models/hr-region-model/region-model';
import { RegionService } from '../../../hr-services/hr-region-service/region.service';

@Component({
  selector: 'edit-region',
  templateUrl: './edit-region.component.html',
  styleUrl: './edit-region.component.css'
})
export class EditRegionComponent {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private regionService:RegionService){}

  region = {
    regionId:0,
    regionName:""
  }

  ngOnInit(){

    this.activatedRoute.queryParams.subscribe(params => {
      this.region.regionId=+params['regionId'];
      this.region.regionName = params['regionName'];
  });
}

updateRegion(){
  console.log(this.region);
  this.regionService.updateRegion(this.region).subscribe((response:string)=>console.log(response));
  this.router.navigate(['region']);
}

}
