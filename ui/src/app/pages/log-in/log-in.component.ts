import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../../interfaces/user.interface';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
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


  get isEmailInvalid() {
    return this.form.controls.security.controls.email.touched && this.form.controls.security.controls.email.invalid && this.form.controls.security.controls.email.dirty;
  }

  get isPasswordInvalid() {
    return this.form.controls.security.controls.password.touched && this.form.controls.security.controls.password.invalid && this.form.controls.security.controls.password.dirty;
  }
}
