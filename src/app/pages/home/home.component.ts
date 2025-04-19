import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardManageComponent } from "./components/card-manage/card-manage.component";
import { HomeService } from '../../services/pages/home.service';
import { CardStepComponent } from "./components/card-step/card-step.component";
import { NavbarComponent } from '../../shared-ui/navbar/navbar.component';
import { FooterComponent } from '../../shared-ui/footer/footer.component';
import { CourseService } from '../../services/shared-services/courses.service';
import { CourseComponent } from '../courses/components/course/course.component';
import { NewsletterComponent } from "../../shared-ui/newsletter/newsletter.component";

@Component({
  selector: 'app-home',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CardManageComponent, CardStepComponent, NavbarComponent, FooterComponent, CourseComponent, NewsletterComponent]
})
export class HomeComponent {
  homeService = inject(HomeService);
  private coursesData = inject(CourseService);

  get coursesArray() {
    return this.coursesData.courses;
  }

  get cardsArray() {
    return this.homeService.cardsArray;
  }

  get stepsArray() {
    return this.homeService.stepsArray;
  }
}
