import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { NavbarComponent } from "../../shared-ui/navbar/navbar.component";
import { CourseComponent } from "../../shared-ui/courses/course/course.component";
import { CourseService } from '../../services/shared-services/courses.service';
import { FacultyService } from '../../services/shared-services/faculty.service';

@Component({
  selector: 'app-courses',
  imports: [NavbarComponent, CourseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  private coursesData = inject(CourseService);
  private facultiesData = inject(FacultyService); 
  selectedFaculty = signal('All');
  
  get coursesArray() {
    if (this.selectedFaculty() === 'Business and Management') {
      return this.coursesData.courses.filter((course) => course.faculty === this.facultiesArray[0].name)
    } else if (this.selectedFaculty() === 'Environmental and Natural Sciences') {
      return this.coursesData.courses.filter((course) => course.faculty === this.facultiesArray[1].name)
    } else if (this.selectedFaculty() === 'Media and Communication') {
      return this.coursesData.courses.filter((course) => course.faculty === this.facultiesArray[2].name)
    } else if (this.selectedFaculty() === 'Technology and Computer Science') {
      return this.coursesData.courses.filter((course) => course.faculty === this.facultiesArray[3].name)
    }
    return this.coursesData.courses;
  }

  get facultiesArray() {
    return this.facultiesData.faculties();
  }

  onSelectFaculty(faculty: string) {
    this.selectedFaculty.set(faculty);
  }
}
