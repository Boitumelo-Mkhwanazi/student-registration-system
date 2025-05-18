import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input, signal } from '@angular/core';
import { CourseService, courseType } from '../../../services/shared-services/courses.service';
import { userService } from '../../../services/shared-services/user.service';

@Component({
  selector: 'app-confirmation',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  courseName = input.required<string>()
  accordionFirstOne = signal<boolean>(false);
  accordionTwoOpen = signal<boolean>(false);
  private courseService = inject(CourseService);
  private userService = inject(userService);

  selectedCourse = computed(
    () => this.courseService.courses.find((course) => course.title === this.courseName())!
  );

  toggleFirstAccordion() {
    console.log("hello")
    this.accordionFirstOne.set(!this.accordionFirstOne());
  }

  toggleSecondAccordion() {
    console.log("hello")
    this.accordionTwoOpen.set(!this.accordionTwoOpen());
  }

  addNewCourse() {
    //this.userService.addNewCourse(this.selectedCourse());
    //console.log(this.userService.courses);
  }
}
