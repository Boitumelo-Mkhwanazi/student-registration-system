import { HttpClient } from '@angular/common/http';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, signal } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CourseService, ModuleType } from '../../services/shared-services/courses.service';

@Component({
  selector: 'app-dashboard',
  imports: [RouterOutlet, RouterLink, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchTerm = '';
  menuOpen = signal(false);
  private modules = inject(CourseService)

  constructor(private httpClient: HttpClient, private router: Router) {}

  onToggleMenu() {
    this.menuOpen.set(!this.menuOpen());
  }

  search() {
    this.router.navigate(['/dashboard/modules']).then(() => {
      this.httpClient.get<ModuleType[]>(
        'http://localhost:3000/api/module',
        {
          params: {
            search: this.searchTerm,
            page: 1,
            per_page: 10
          }
        }
      ).subscribe({
        next: (modules) => {
          console.log(modules);
        },
        error: (err) => console.error(err)
      });
    });
  }
}
