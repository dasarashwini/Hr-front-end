import { LocationModel } from "../hr-location-model/location-model";

export interface DepartmentModel {
  departmentId:number;
  departmentName:string;
  locationsPojo:LocationModel;
}
