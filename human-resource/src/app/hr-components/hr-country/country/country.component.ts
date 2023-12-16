import { Component } from '@angular/core';
import { CountryService } from '../../../hr-services/hr-country-service/country.service';
import { Router } from '@angular/router';
import { CountryModel } from '../../../hr-models/hr-country-model/country-model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'country',
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {

  allCountries:CountryModel[]=[];
  selectedCountry: CountryModel | null = null; 
  CountryId!:string;
  

  constructor(private countryService:CountryService,private router:Router){}
  

  ngOnInit(){
    this.getAllCountries();
  }

  viewAll(){
    this.selectedCountry = null;
  }

  getAllCountries(){
    this.countryService.getAllCountries().subscribe((response:CountryModel[])=>{
      
      this.allCountries = response;
      // console.log(this.allCountries);
    });
  }

  getCountryById(){
    this.countryService.getCountryById(this.CountryId).subscribe((response: CountryModel) => {
      console.log(response);
      this.selectedCountry=response;
      
    });
  }

  addLocation(){
    this.router.navigate(['add-country']);
  }

  deleteCountry(countryId:string){
      this.countryService.deleteRegionById(countryId).subscribe((response:string)=>{
        this.getAllCountries();
        console.log(response);
      });
    }

    updateCountry(countryId:string,countryName:string,regionId:number){
      this.router.navigate(['edit-country'],{ queryParams: { countryId, countryName,regionId }});
    }




  }
      
  





