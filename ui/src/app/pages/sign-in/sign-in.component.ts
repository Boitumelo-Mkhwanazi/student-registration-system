import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
  authService = inject(AuthService);
  router = inject(Router);
  form = new FormGroup({
    names: new FormGroup({
      firstName: new FormControl('', {
        validators: [Validators.required, Validators.min(3), Validators.max(255)]
      }),
      lastName: new FormControl('', {
        validators: [Validators.required, Validators.min(3), Validators.max(255)]
      })
    }),
    security: new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6), Validators.maxLength(30)]
      }),
      confirmPassword: new FormControl('', {
        validators: [Validators.required, Validators.minLength(6), Validators.maxLength(30)]
      })
    }, { validators: this.passwordMatchValidator })
  })

  passwordMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  handleSubmit(event : Event) {

    if (this.form.valid ) {
      event.preventDefault();
      const user : User = {
        name : this.form.value.names?.firstName??'',
        surname : this.form.value.names?.lastName??'',
        email: this.form.value.security?.email??'',
        password: this.form.value.security?.password??'',
      }

      console.log(user);

      this.authService.signup(user).subscribe((res : any) => {
        this.router.navigate(['/log-in'])
      })
    }
  }

  get isEmailInvalid() {
    return this.form.controls.security.controls.email.touched && this.form.controls.security.controls.email.invalid && this.form.controls.security.controls.email.dirty;
  }

  get isPasswordValid() {
    return this.form.controls.security.controls.password.touched && this.form.controls.security.controls.password.invalid && this.form.controls.security.controls.password.dirty;
  }

  get isConfirmPasswordValid() {
    return this.form.controls.security.controls.confirmPassword.touched && this.form.controls.security.controls.confirmPassword.invalid && this.form.controls.security.controls.confirmPassword.dirty;
  }

}
