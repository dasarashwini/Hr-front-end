import { DepartmentModel } from "../hr-department-model/department-model";
import { EmployeeModel } from "../hr-employee-model/employee-model";
import { JobsModel } from "../hr-jobs-model/jobs-model";

export interface JobHistoryModel {
  employeesPojo:EmployeeModel;
  startDate:Date;
  endDate:Date;
  jobsPojo:JobsModel;
  departmentsPojo:DepartmentModel
}
