import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/shared/layouts/navbar/navbar.component';
import { FooterComponent } from './components/shared/layouts/footer/footer.component';
import { LoginPageComponent } from './components/features/auth/login-page/login-page.component';
import { RegisterPageComponent } from './components/features/auth/register-page/register-page.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SalesTrackingManagementClient';
}
