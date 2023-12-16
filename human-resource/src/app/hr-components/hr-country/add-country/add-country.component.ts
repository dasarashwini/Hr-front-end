import { Component } from '@angular/core';
import { CountryService } from '../../../hr-services/hr-country-service/country.service';
import { Router } from '@angular/router';
import { CountryModel } from '../../../hr-models/hr-country-model/country-model';

@Component({
  selector: 'add-country',
  templateUrl: './add-country.component.html',
  styleUrl: './add-country.component.css'
})
export class AddCountryComponent {

  newCountry:CountryModel = {
    countryId:"",
    countryName:"",
    regionsPojo:{
      regionId:0,
      regionName:""
    }
  }
    
  constructor(private countryService:CountryService,private router:Router){}
  



  addCountry(){
    this.countryService.addNewCountry(this.newCountry).subscribe((response:string)=>console.log(response));
    this.router.navigate(['country']);

  }

}
