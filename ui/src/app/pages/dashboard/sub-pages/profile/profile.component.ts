import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  private httpClient = inject(HttpClient);
  form = new FormGroup({
    personalInfo: new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(255)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      gender: new FormControl('null'),
      dateOfBirth: new FormControl('', [
        Validators.required
      ])
    }),

    address: new FormGroup({
      fullAddress: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      streetName: new FormControl('', [
        Validators.required
      ]),
      city: new FormControl('', [
        Validators.required
      ]),
      province: new FormControl('null', [
        Validators.required
      ]),
      postalCode: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{4,6}$/)  // Basic postal code validation
      ]),
      country: new FormControl('South Africa', [
        Validators.required
      ])
    }),

    profilePicture: new FormControl(null) // Optional – use for file upload handling
  });

  onSubmit() {
  if (this.form.invalid) {
    this.form.markAllAsTouched();
    return;
  }

  const formData = {
    firstName: this.form.get('personalInfo.firstName')?.value,
    lastName: this.form.get('personalInfo.lastName')?.value,
    email: this.form.get('personalInfo.email')?.value,
    gender: this.form.get('personalInfo.gender')?.value,
    dateOfBirth: this.form.get('personalInfo.dateOfBirth')?.value,

    fullAddress: this.form.get('address.fullAddress')?.value,
    streetName: this.form.get('address.streetName')?.value,
    city: this.form.get('address.city')?.value,
    province: this.form.get('address.province')?.value,
    postalCode: this.form.get('address.postalCode')?.value,
    country: this.form.get('address.country')?.value,

    // Optional: profilePicture handling goes here if needed
  };

  this.httpClient.post('http://localhost:3000/api/user', formData).subscribe({
    next: (res) => {
      console.log('User updated successfully:', res);
      // You can also show a toast or success message here
    },
    error: (error) => {
      console.error('Error updating user:', error);
      // Optionally show user-friendly error message
    }
  });
}
}
