import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared-ui/navbar/navbar.component";
import { FooterComponent } from "./shared-ui/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-registration-system';
}
