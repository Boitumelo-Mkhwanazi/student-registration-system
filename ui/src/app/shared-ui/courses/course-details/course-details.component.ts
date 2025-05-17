import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CourseService } from '../../../services/shared-services/courses.service';
import { CourseComponent } from "../course/course.component";
import { NewsletterComponent } from "../../newsletter/newsletter.component";
import { FooterComponent } from "../../footer/footer.component";
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-details',
  imports: [NavbarComponent, CourseComponent, NewsletterComponent, FooterComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  courseName = input.required<string>();
  showingMore = signal<boolean>(false);
  private courseService = inject(CourseService);
  private coursesData = inject(CourseService);
  private httpClient = inject(HttpClient);
  private destroyRef = inject(DestroyRef);

  ngOnInit() {
    const subscription = this.httpClient.get(`http://localhost:3000/api/module/${this.selectedCourse().id}`)
    .subscribe({
      next: (responseData) => {
        console.log(responseData)
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
    () => this.courseService.courses.find((course) => course.title === this.courseName())!
  );

  onShowMore() {
    this.showingMore.set(!this.showingMore())
  }
}
