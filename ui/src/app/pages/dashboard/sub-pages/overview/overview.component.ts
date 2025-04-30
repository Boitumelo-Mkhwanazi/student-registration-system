import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { userService } from '../../../../services/shared-services/user.service';
import { CourseComponent } from '../../../../shared-ui/courses/course/course.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [CourseComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  private userService = inject(userService);

  get userCourses () {
    return this.userService.courses;
  }
}
