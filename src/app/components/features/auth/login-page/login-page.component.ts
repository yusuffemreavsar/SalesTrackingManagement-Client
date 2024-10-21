import { IUserLoginRequest } from './../../../../models/user/requests/user-login-request.model';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../../../../services/login/login.service';
import { Router, RouterLink } from '@angular/router';
import { TokenService } from '../../../../core/services/token/token.service';
import { NavbarService } from '../../../../services/navbar/navbar.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [RouterLink,FormsModule,ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  formBuilder=inject(FormBuilder);
  httpService=inject(LoginService)
  tokenService=inject(TokenService)
  navbarService=inject(NavbarService)
  router=inject(Router)


  loginForm = this.formBuilder.group({
    email: [''], 
    password: [''], 
  });

  onSubmit() {
    const user:IUserLoginRequest={
      email: this.loginForm.value.email!,
      password:this.loginForm.value.password!,
   }
   this.httpService.loginUser(user).subscribe((response)=>{
    try {
      this.tokenService.setToken(response.accessToken.token)
      this.navbarService.setLoggedIn(true);
      console.log("Success...")
      console.log("Token:",response.accessToken)
      this.router.navigate(['/main']);  
    } catch (error) {
      console.log(error)
    }
    
   })
  }

}
