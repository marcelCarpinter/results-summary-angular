import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: `
    <app-card></app-card>
  `,
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {

}
