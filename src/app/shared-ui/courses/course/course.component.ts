import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { courseType } from '../../../services/shared-services/courses.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-course',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courseData = input.required<courseType>();
}
