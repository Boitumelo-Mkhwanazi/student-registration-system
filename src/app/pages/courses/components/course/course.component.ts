import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { courseType } from '../../../../services/courses.service';

@Component({
  selector: 'app-course',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  courseData = input.required<courseType>();
}
