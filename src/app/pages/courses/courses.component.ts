import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { NavbarComponent } from "../../shared-ui/navbar/navbar.component";
import { CourseComponent } from "./components/course/course.component";
import { CourseService } from '../../services/pages/courses.service';

@Component({
  selector: 'app-courses',
  imports: [NavbarComponent, CourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  coursesData = inject(CourseService);
  selectedFaculty = signal('All');
  
  get coursesArray() {
    if (this.selectedFaculty() == 'Health Science') {
      return this.coursesData.courses.filter((course) => course.faculty === 'Health Science')
    } else if (this.selectedFaculty() == 'Science') {
      return this.coursesData.courses.filter((course) => course.faculty === 'Science')
    } else if (this.selectedFaculty() == 'Engineering') {
      return this.coursesData.courses.filter((course) => course.faculty === 'Engineering')
    }
    return this.coursesData.courses;
  }

  onSelectFaculty(faculty: string) {
    this.selectedFaculty.set(faculty);
  }
}
