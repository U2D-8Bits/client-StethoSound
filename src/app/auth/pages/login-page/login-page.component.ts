import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MessageService } from 'primeng/api';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css',
  providers:[MessageService]
})
export class LoginPageComponent {

  constructor(private messageService: MessageService) {}

  private authService = inject(AuthService);
  private router = inject(Router)
  private fb = inject(FormBuilder);

  public myForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  login(){
    const {username, password} = this.myForm.value;

    this.authService.login(username, password)
      .subscribe({
        next: () => this.router.navigate(['/main']),
        error: (error) => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: error });
        }
      })

  }

}
