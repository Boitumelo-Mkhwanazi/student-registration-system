import { Component, input } from '@angular/core';
import { stepCardType } from '../../../../services/home.service';

@Component({
  selector: 'app-card-step',
  imports: [],
  templateUrl: './card-step.component.html',
  styleUrl: './card-step.component.css'
})
export class CardStepComponent {
  stepData = input.required<stepCardType>();
}
