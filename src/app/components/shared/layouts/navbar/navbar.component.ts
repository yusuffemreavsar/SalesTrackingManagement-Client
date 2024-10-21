import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TokenService } from '../../../../core/services/token/token.service';
import { NavbarService } from '../../../../services/navbar/navbar.service';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  tokenService=inject(TokenService)
  navbarService=inject(NavbarService)
  userService=inject(UserService)
  isLoggedIn: boolean = true;
  userName:string=""


  checkToken() {
    const token = this.tokenService.getToken();
    if (token) {
      this.isLoggedIn = true;
    }
  }
  logout() {
    this.isLoggedIn=false;
    this.tokenService.setToken("");
  }
  async ngOnInit() {
    this.navbarService.isLoggedIn.subscribe(isLoggedIn => {
      this.isLoggedIn = isLoggedIn;
    });
    this.checkToken()
    await this.userService.getUser().subscribe(user=>{
      this.userName=user.firstName
    })

}
}
