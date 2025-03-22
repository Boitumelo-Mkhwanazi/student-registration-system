import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { cardType } from '../../../../services/home.service';

@Component({
  selector: 'app-card-manage',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './card-manage.component.html',
  styleUrl: './card-manage.component.css'
})
export class CardManageComponent {
  cardData = input.required<cardType>();
}
