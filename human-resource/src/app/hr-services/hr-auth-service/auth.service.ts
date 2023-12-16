import { Injectable } from '@angular/core';
import { UserModel } from '../../hr-models/hr-user-model/user-model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: boolean = false;

  storeUser(user: UserModel){
    // store the user object in the session storage
    sessionStorage.setItem("userInfo", JSON.stringify(user));
  }

  retrieveUser(){
      let userString: any = sessionStorage.getItem("userInfo");
      let user = JSON.parse(userString);      
      return user;
  }

  removeUser(){
    sessionStorage.removeItem("userInfo");
  }
}
