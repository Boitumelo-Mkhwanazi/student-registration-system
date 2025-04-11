import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from "../../shared-ui/navbar/navbar.component";
import { CourseComponent } from "./course/course.component";

@Component({
  selector: 'app-courses',
  imports: [NavbarComponent, CourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

}
