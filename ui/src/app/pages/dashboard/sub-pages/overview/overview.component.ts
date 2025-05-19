import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { userService } from '../../../../services/shared-services/user.service';
import { CourseComponent } from '../../../../shared-ui/courses/course/course.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth/auth.service';

@Component({
  selector: 'app-overview',
  imports: [CourseComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.css'
})
export class OverviewComponent {
  userService = inject(userService);
  authService = inject(AuthService);
  user: any;
  userCourses: any[];

  constructor () {
    this.user = this.authService.getCurrentUser();
    this.userCourses = this.userService.courses; 
  }
  
}