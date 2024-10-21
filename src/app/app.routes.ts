import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/features/auth/login-page/login-page.component';
import { RegisterPageComponent } from './components/features/auth/register-page/register-page.component';
import { MainComponent } from './pages/main/main.component';


export const routes: Routes = [
    {path:'login', component: LoginPageComponent},
    {path:'register',component:RegisterPageComponent},
    {path:'main',component:MainComponent}
    
];
