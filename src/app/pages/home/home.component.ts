import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardManageComponent } from "./components/card-manage/card-manage.component";
import { HomeService } from '../../services/home.service';
import { CardStepComponent } from "./components/card-step/card-step.component";
import { NavbarComponent } from '../../shared-ui/navbar/navbar.component';

@Component({
  selector: 'app-home',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CardManageComponent, CardStepComponent, NavbarComponent]
})
export class HomeComponent {
  homeService = inject(HomeService);

  get cardsArray() {
    return this.homeService.cardsArray;
  }

  get stepsArray() {
    return this.homeService.stepsArray;
  }
}
