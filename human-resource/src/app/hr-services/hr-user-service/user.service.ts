import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserModel } from '../../hr-models/hr-user-model/user-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string = "http://localhost:8080/api/v1/user/login";
  constructor(private httpClient: HttpClient) { }

  validate(newUser: UserModel): Observable<UserModel>{
    return this.httpClient.post<UserModel>(this.baseUrl, newUser);
  }
}
