import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';

@Component({
  selector: 'app-confirmation',
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  accordionFirstOne = signal<boolean>(false);
  accordionTwoOpen = signal<boolean>(false);

  toggleFirstAccordion() {
    console.log("hello")
    this.accordionFirstOne.set(!this.accordionFirstOne());
  }

  toggleSecondAccordion() {
    console.log("hello")
    this.accordionTwoOpen.set(!this.accordionTwoOpen());
  }
}
