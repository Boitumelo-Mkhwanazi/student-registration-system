import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, input, signal } from '@angular/core';
import { CourseService } from '../../../../../services/shared-services/courses.service';
import { CourseComponent } from '../../../../../shared-ui/courses/course/course.component';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-information',
  imports: [CourseComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-information.component.html',
  styleUrl: './course-information.component.css'
})
export class CourseInformationComponent {
  module = signal<any>('');
  courseName = input.required<string>();
  showingMore = signal<boolean>(false);
  private courseSerivice = inject(CourseService);
  private coursesData = inject(CourseService);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.httpClient.get(`http://localhost:3000/api/module/${this.selectedCourse().id}`)
    .subscribe({
      next: (responseData : any) => {
        console.log("Coming from courses-details");
        this.module.set(responseData.data);
        console.log(this.module());
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
    return this.coursesData.courses;
  }

  selectedCourse = computed(
    () => this.courseSerivice.courses.find((course) => course.title === this.courseName())!
  );

  onShowMore() {
    this.showingMore.set(!this.showingMore())
  }
}
