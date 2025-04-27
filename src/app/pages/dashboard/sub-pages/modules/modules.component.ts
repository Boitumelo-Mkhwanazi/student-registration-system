import { Component, inject } from '@angular/core';
import { CourseService } from '../../../../services/shared-services/courses.service';
import { CourseComponent } from "../../../../shared-ui/courses/course/course.component";

@Component({
  selector: 'app-modules',
  imports: [CourseComponent],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {
  private coursesService = inject(CourseService);

  get coursesArray() {
    return this.coursesService.courses;
  }
}
