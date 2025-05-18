import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, DestroyRef, inject, input, OnInit, signal } from '@angular/core';
import { NavbarComponent } from "../../navbar/navbar.component";
import { CourseService } from '../../../services/shared-services/courses.service';
import { CourseComponent } from "../course/course.component";
import { NewsletterComponent } from "../../newsletter/newsletter.component";
import { FooterComponent } from "../../footer/footer.component";
import { Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-course-details',
  imports: [NavbarComponent, CourseComponent, NewsletterComponent, FooterComponent, RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent implements OnInit {
  module = signal<any>({});
  courseName = input.required<string>();
  showingMore = signal<boolean>(false);
  id : any;
  private courseService = inject(CourseService);
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
    () => this.courseService.modules().find((course) => course.course_name === this.courseName())!
  );

  onShowMore() {
    this.showingMore.set(!this.showingMore())
  }
}
