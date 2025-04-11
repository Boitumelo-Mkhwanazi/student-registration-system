import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { NavbarComponent } from "../../shared-ui/navbar/navbar.component";
import { CourseComponent } from "./course/course.component";
import { CourseService } from '../../services/courses.service';

@Component({
  selector: 'app-courses',
  imports: [NavbarComponent, CourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  coursesData = inject(CourseService);
  
  get coursesArray() {
    return this.coursesData.courses;
  }
}
