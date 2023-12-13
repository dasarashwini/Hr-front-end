import { CountryModel } from "../hr-country-model/country-model";

export interface LocationModel {
  locationsId:number;
  streetAddress:string;
  postalCode:string;
  city:string;
  stateProvince:string;
  countriesPojo:CountryModel
}
