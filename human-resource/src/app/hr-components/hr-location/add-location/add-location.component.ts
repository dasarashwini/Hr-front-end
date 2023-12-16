import { Component } from '@angular/core';
import { LocationService } from '../../../hr-services/hr-location-service/location.service';
import { Router } from '@angular/router';
import { LocationModel } from '../../../hr-models/hr-location-model/location-model';

@Component({
  selector: 'add-location',
  templateUrl: './add-location.component.html',
  styleUrl: './add-location.component.css'
})
export class AddLocationComponent {
  newLocation:LocationModel = {
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
    },
  }
 
  constructor(private locationService:LocationService,private router:Router){}

  addNewLocation(){
    this.locationService.addNewLocation(this.newLocation).subscribe((response:string)=>console.log(response));
    this.router.navigate(['location']);
  }


}


