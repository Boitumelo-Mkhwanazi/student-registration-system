import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, input, signal } from '@angular/core';
import { CourseService, courseType } from '../../../services/shared-services/courses.service';
import { userService } from '../../../services/shared-services/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-confirmation',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  module = signal<any>({});
  id : any;
  courseName = input.required<string>()
  accordionFirstOne = signal<boolean>(false);
  accordionTwoOpen = signal<boolean>(false);
  private courseService = inject(CourseService);
  private userService = inject(userService);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  constructor(private router : Router) {}
  
  ngOnInit() {
    const currentPath = this.router.url;
    const match = currentPath.match(/\/courses\/(\d+)/)
    this.id = match ? parseInt(match[1], 10) : null;

    const subscription = this.httpClient.get(`http://localhost:3000/api/module/${this.id}`)
    .subscribe({
      next: (responseData : any) => {
        this.module.set(responseData.data[0]);
        console.log("Confirmation", this.module())
      },
      error: (error) => {
        console.log(error)
      }
    })

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }

  get coursesArray() {
    return this.courseService.modules();
  }

  selectedCourse = computed(
    () => this.courseService.modules().find((course) => course.course_name === this.courseName())!
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
