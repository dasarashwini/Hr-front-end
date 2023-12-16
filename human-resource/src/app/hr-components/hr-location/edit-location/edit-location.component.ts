import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from '../../../hr-services/hr-location-service/location.service';
import { LocationModel } from '../../../hr-models/hr-location-model/location-model';

@Component({
  selector: 'edit-location',
  templateUrl: './edit-location.component.html',
  styleUrl: './edit-location.component.css'
})
export class EditLocationComponent {
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private locationService:LocationService){}
 
  location:LocationModel = {
    locationsId: 0,
    streetAddress: "",
    postalCode: "",
    city: "",
    stateProvince: "",
    countriesPojo: {
      countryId: "",
      countryName: "",
      regionsPojo: {
        regionId: 0,
        regionName: ""
  }
}
  }
 
  ngOnInit(){
 
    this.activatedRoute.queryParams.subscribe(params => {
      this.location.locationsId=+params['locationId'];
      this.location.streetAddress = params['streetAddress'];
      this.location.postalCode=params['postalCode'];
      this.location.city=params['city'];
      this.location.stateProvince=params['stateProvince'];
      this.location.countriesPojo.countryId=params['countryId'];
  });
}
updateLocation(){
  console.log(this.location);
  this.locationService.updateLocation(this.location).subscribe((response:string)=>console.log(response));
  this.router.navigate(['location']);
}

}
