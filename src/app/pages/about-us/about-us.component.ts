import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { MemberComponent } from "./components/member/member.component";
import { AboutService } from '../../services/about.service';

@Component({
  selector: 'app-about-us',
  imports: [MemberComponent],
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
