import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountryService } from '../../../hr-services/hr-country-service/country.service';
import { CountryModel } from '../../../hr-models/hr-country-model/country-model';

@Component({
  selector: 'edit-country',
  templateUrl: './edit-country.component.html',
  styleUrl: './edit-country.component.css'
})
export class EditCountryComponent {

  constructor(private router:Router,private activatedRoute:ActivatedRoute,private countryService:CountryService){}

  Country:CountryModel = {
    countryId:"",
    countryName:"",
    regionsPojo:{
      regionId:0,
      regionName:""
    }
  }

  ngOnInit(){

    this.activatedRoute.queryParams.subscribe(params => {
      this.Country.countryId=params['countryId'];
      this.Country.countryName = params['countryName'];
      this.Country.regionsPojo.regionId = params['regionId'];
});
  }

updateCountry(){
  // console.log(this.Country);
  this.countryService.updateCountry(this.Country).subscribe((response:string)=>console.log(response));
  this.router.navigate(['country']);
}

}
