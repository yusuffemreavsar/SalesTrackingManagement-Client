import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  formBuilder=inject(FormBuilder);
  registerForm = this.formBuilder.group({
    firstName: [''], 
    lastName: [''], 
    email: [''], 
    password:[''],
    phoneNumber: [''], 
  });
}
