import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent {
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
    })
  })

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
