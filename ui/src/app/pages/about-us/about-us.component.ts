import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MemberComponent } from "./components/member/member.component";
import { AboutService } from '../../services/pages/about.service';
import { MemberDialogueComponent } from './components/member-dialogue/member-dialogue.component';
import { NavbarComponent } from '../../shared-ui/navbar/navbar.component';
import { FooterComponent } from '../../shared-ui/footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [MemberComponent, NavbarComponent, FooterComponent, RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {
    aboutData = inject(AboutService);

    get membersArray() {
      return this.aboutData.members;
    }
}
