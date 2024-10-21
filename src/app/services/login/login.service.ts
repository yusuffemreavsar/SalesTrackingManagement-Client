import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUserLoginRequest } from '../../models/user/requests/user-login-request.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl="http://localhost:60805"
  http=inject(HttpClient)
  constructor() { }

  loginUser(user:IUserLoginRequest){
    return this.http.post<{accessToken: { token: string }}>(this.apiUrl +'/api/Auth/Login',user);
  }

}
