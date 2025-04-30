import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarService } from '../../services/pages/navbar.service';
import { LinkItemComponent } from './link-item/link-item.component';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, LinkItemComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  links = inject(NavbarService);
  isMenuOpen : boolean = false;
  selectedLinkId !: string;

  get linksArray () {
    return this.links.navLinks;
  }

  onOpenMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  onSetLinkActive(id: string) {
    this.selectedLinkId = id;
  }
}
