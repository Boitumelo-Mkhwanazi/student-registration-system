import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  private authService = inject(AuthService);
  private router = inject(Router);
  form = new FormGroup({
    security: new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.minLength(6), Validators.maxLength(30)]
      }),
    })
  })

  handleSubmit(event : Event) {

    if (this.form.valid ) {
      event.preventDefault();
      const user : User = {
        email: this.form.value.security?.email??'',
        password: this.form.value.security?.password??'',
      }

      this.authService.login(user).subscribe((res : any) => {
        this.router.navigate(['dashboard/overview']);
      })
    }
  }
  get isEmailInvalid() {
    return this.form.controls.security.controls.email.touched && this.form.controls.security.controls.email.invalid && this.form.controls.security.controls.email.dirty;
  }

  get isPasswordInvalid() {
    return this.form.controls.security.controls.password.touched && this.form.controls.security.controls.password.invalid && this.form.controls.security.controls.password.dirty;
  }
}
