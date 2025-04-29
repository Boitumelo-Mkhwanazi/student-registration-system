import { Injectable } from "@angular/core";

type faculty = 'Health Science' | 'Science' | 'Engineering';

export interface courseType {
  id: string;
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
    courses: courseType[] = [
    ]

    addNewCourse(newCourse: courseType) {
        this.courses = [...this.courses, newCourse]
    }
}