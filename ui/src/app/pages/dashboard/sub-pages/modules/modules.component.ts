import { Component, computed, inject, signal } from '@angular/core';
import { CourseService } from '../../../../services/shared-services/courses.service';
import { CourseComponent } from "../../../../shared-ui/courses/course/course.component";
import { FormsModule } from '@angular/forms';
import { FacultyService } from '../../../../services/shared-services/faculty.service';

@Component({
  selector: 'app-modules',
  imports: [CourseComponent, FormsModule],
  templateUrl: './modules.component.html',
  styleUrl: './modules.component.css'
})
export class ModulesComponent {
  enteredSortCategory = signal('Most Popular');
  enteredCourseCategory = signal('All');
  selectedSortCategory = computed(() => this.enteredSortCategory());
  selectedCourseCategory = computed(() => this.enteredCourseCategory())
  private coursesService = inject(CourseService);
  private faculty = inject(FacultyService);

  onSelectSortCategory() {
    return this.coursesService.sortByPopularity(this.enteredSortCategory());
  }

  get AllFaculties() {
    return this.faculty.faculties();
  }

  onSelectCourseCategory() {
    return this.coursesService.filteredCourses(this.enteredCourseCategory());
  }
}
