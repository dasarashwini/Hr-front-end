import { DepartmentModel } from "../hr-department-model/department-model";
import { JobsModel } from "../hr-jobs-model/jobs-model";

export interface EmployeeModel {
  employeeId:number;
  firstName:string;
  lastName:string;
  email:string;
  phoneNumber:string;
  hireDate:Date;
  jobsPojo:JobsModel;
  salary:number;
  commissionPct:number;
  managerId:number;
  departmentsPojo:DepartmentModel
}
