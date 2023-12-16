import { RolesModel } from "../hr-roles-model/roles-model";

export interface UserModel {
  userId: number,
    userName: string,
    userPassword: string,
    allRolesPojo: RolesModel[]
}
