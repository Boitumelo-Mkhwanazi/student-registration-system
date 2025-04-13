import { Component, CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';
import { memberType } from '../../../../services/about.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './member.component.html',
  styleUrl: './member.component.css'
})
export class MemberComponent {
  memberData = input.required<memberType>();

}
