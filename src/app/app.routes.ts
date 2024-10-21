import { Routes } from '@angular/router';
import { LoginPageComponent } from './features/auth/login-page/login-page.component';

export const routes: Routes = [
    {path:'login',component:LoginPageComponent},
    {path:'register',component:LoginPageComponent}
];
