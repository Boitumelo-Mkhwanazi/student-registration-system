import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MemberComponent } from "./components/member/member.component";
import { AboutService } from '../../services/about.service';
import { MemberDialogueComponent } from './components/member-dialogue/member-dialogue.component';
import { NavbarComponent } from '../../shared-ui/navbar/navbar.component';

@Component({
  selector: 'app-about-us',
  imports: [MemberComponent, MemberDialogueComponent, NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
    aboutData = inject(AboutService);
    selectedUserId = '';
    dialogOpen = false;

    get membersArray() {
      return this.aboutData.members;
    }
    
    get selectedUserData () {
      return this.aboutData.members.find(member => member.userId === this.selectedUserId);
    }

    onSelectUser(userId: string) {
      this.selectedUserId = userId;
      this.dialogOpen = true;
    }

    closeDialog() {
      this.dialogOpen = false;
    }
}
