import { Component, CUSTOM_ELEMENTS_SCHEMA, input, output } from '@angular/core';
import { memberType } from '../../../../services/about.service';

@Component({
  selector: 'app-member-dialogue',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './member-dialogue.component.html',
  styleUrl: './member-dialogue.component.css'
})
export class MemberDialogueComponent {
  selectedMember = input.required<memberType>();
  close = output<void>();

  onClose() {
    this.close.emit();
  }
}
