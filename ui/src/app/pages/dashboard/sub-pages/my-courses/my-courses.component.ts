import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { userService } from '../../../../services/shared-services/user.service';
import { CourseComponent } from '../../../../shared-ui/courses/course/course.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  imports: [CourseComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {
  private userService = inject(userService);

  get userCourses() {
    return this.userService.courses;
  }
}
