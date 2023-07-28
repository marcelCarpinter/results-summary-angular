import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';
import {ResultsComponent} from "./results/results.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
  	CardComponent,
    ResultsComponent
  ],
  template: `
  <main>
    <section class="content">
      <app-results></app-results>
    </section>
  </main>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
}
