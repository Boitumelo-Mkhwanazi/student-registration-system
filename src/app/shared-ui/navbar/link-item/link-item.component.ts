import { Component, input, output } from '@angular/core';
import { navLink } from '../../../services/pages/navbar.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-link-item',
  imports: [RouterLink],
  templateUrl: './link-item.component.html',
  styleUrl: './link-item.component.css'
})
export class LinkItemComponent {
  inputData = input.required<navLink>();
  selectedLink = input.required<boolean>();
  outputData = output<string>();

  onOnputData() {
    this.outputData.emit(this.inputData().id);
  }
}
