import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, input, signal } from '@angular/core';
import { CourseService } from '../../../../../services/shared-services/courses.service';
import { CourseComponent } from '../../../../../shared-ui/courses/course/course.component';
import { Router, RouterLink } from '@angular/router';
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
  id : any;
  private courseSerivice = inject(CourseService);
  private coursesData = inject(CourseService);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  constructor(private router : Router) {}
  
  ngOnInit() {
    const currentPath = this.router.url;
    const match = currentPath.match(/\/(\d+)$/);
    this.id = match ? parseInt(match[1], 10) : null;

    const subscription = this.httpClient.get(`http://localhost:3000/api/module/${this.id}`)
    .subscribe({
      next: (responseData : any) => {
        console.log("Dashboard--course", responseData.data[0])
        this.module.set(responseData.data[0]);
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
    return this.coursesData.modules();
  }

  selectedCourse = computed(
    () => this.courseSerivice.modules().find((course) => course.course_name === this.courseName())!
  );

  onShowMore() {
    this.showingMore.set(!this.showingMore())
  }
}
