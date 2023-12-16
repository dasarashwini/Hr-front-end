import { Component } from '@angular/core';
import { UserService } from '../../../hr-services/hr-user-service/user.service';
import { AuthService } from '../../../hr-services/hr-auth-service/auth.service';
import { Route, Router } from '@angular/router';
import { UserModel } from '../../../hr-models/hr-user-model/user-model';

@Component({
  selector: 'user-login',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

  newUser: UserModel = {
    userId: 0,
    userName: "",
    userPassword: "",
    allRolesPojo: []
  }

  user: UserModel = {
    userId: 0,
    userName: "",
    userPassword: "",
    allRolesPojo: []
  }

  errorMessage: string = '';

  constructor(private userService: UserService,
              private authService: AuthService,
              private router: Router){}
  login(){
    // validate the username password by 
    // consuming endpoint in service layer 
    this
      .userService
      .validate(this.newUser)
      .subscribe((response)=>{
        // means user name and password is correct
        console.log(response);
        // store the response (user object) in sessionStorage
        this.authService.storeUser(response);
        this.authService.isLoggedIn = true;
        this.router.navigate(['region']);
        this.user = response;
        console.log(this.user.allRolesPojo)
      },
      (error)=>{
        console.log(error);
        this.errorMessage = error.error.errorMessage
      });
    }

    signUp(){
      this.router.navigate(['user-signup']);
    }


}
