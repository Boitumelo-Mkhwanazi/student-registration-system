import { inject, Injectable } from "@angular/core";
import { AuthService } from "../auth/auth.service";

type faculty = 'Health Science' | 'Science' | 'Engineering';

export interface courseType {
  id: number;
  image: string
  title: string;
  description: string;
  detailed_description: string,
  instructorId: string;
  faculty: faculty;
  studentsCount: number;
  rating: number;
  fee: number
}

@Injectable({ providedIn: 'root' })
export class userService {
  private authService = inject(AuthService);
  user : any;
  courses: any[] = [];

  constructor () {
    this.user = this.authService.getCurrentUser();
  }
}