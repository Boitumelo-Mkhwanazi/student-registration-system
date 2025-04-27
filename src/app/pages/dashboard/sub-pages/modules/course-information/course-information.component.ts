import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';
import { CourseService } from '../../../../../services/shared-services/courses.service';
import { CourseComponent } from '../../../../../shared-ui/courses/course/course.component';

@Component({
  selector: 'app-course-information',
  imports: [CourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-information.component.html',
  styleUrl: './course-information.component.css'
})
export class CourseInformationComponent {
  courseName = input.required<string>();
  showingMore = signal<boolean>(false);
  private courseSerivice = inject(CourseService);
  private coursesData = inject(CourseService);

  get coursesArray() {
    return this.coursesData.courses;
  }

  selectedCourse = computed(
    () => this.courseSerivice.courses.find((course) => course.title === this.courseName())!
  );

  onShowMore() {
    this.showingMore.set(!this.showingMore())
  }
}
