import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';
import { NavbarComponent } from "../../../shared-ui/navbar/navbar.component";
import { CourseService } from '../../../services/pages/courses.service';

@Component({
  selector: 'app-course-details',
  imports: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  courseName = input.required<string>();
  showingMore = signal<boolean>(false);
  private courseSerivice = inject(CourseService)

  selectedCourse = computed(
    () => this.courseSerivice.courses.find((course) => course.title === this.courseName())!
  );

  onShowMore() {
    this.showingMore.set(!this.showingMore())
  }
}
