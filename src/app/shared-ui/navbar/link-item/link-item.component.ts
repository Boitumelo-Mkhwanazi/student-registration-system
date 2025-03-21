import { Component, input } from '@angular/core';
import { navLink } from '../../../services/navbar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-item',
  imports: [RouterLink],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  inputData = input.required<navLink>();
}
