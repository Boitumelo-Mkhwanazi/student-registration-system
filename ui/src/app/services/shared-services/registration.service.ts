import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
  private apiUrl = '/api/registration'; // Adjust if backend is hosted elsewhere

  constructor(private http: HttpClient) {}

  registerModule(studentId: number, moduleId: number): Observable<any> {
    return this.http.post(this.apiUrl, { studentId, moduleId });
  }
}