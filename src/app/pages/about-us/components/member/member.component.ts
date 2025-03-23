import { Component, CUSTOM_ELEMENTS_SCHEMA, input } from '@angular/core';
import { memberType } from '../../../../services/about.service';

@Component({
  selector: 'app-member',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  memberData = input.required<memberType>();
}
