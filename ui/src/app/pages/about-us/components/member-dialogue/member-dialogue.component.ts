import { Component, computed, CUSTOM_ELEMENTS_SCHEMA, inject, input} from '@angular/core';
import { AboutService } from '../../../../services/pages/about.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-dialogue',
  imports: [RouterLink],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './member-dialogue.component.html',
  styleUrl: './member-dialogue.component.css'
})
export class MemberDialogueComponent {
  memberName = input.required<string>();
  private aboutService = inject(AboutService)

  selectedMember = computed(() => this.aboutService.members.find((member) => member.fullName === this.memberName())!);
}
