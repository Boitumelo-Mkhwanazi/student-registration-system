import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CourseService } from '../../../services/shared-services/courses.service';
import { CourseComponent } from "../course/course.component";
import { NewsletterComponent } from "../../newsletter/newsletter.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-course-details',
  imports: [NavbarComponent, CourseComponent, NewsletterComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
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
