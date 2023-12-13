import { RegionModel } from "../hr-region-model/region-model";

export interface CountryModel {

  countryId:string;
  countryName:string;
  regionsPojo:RegionModel
}
