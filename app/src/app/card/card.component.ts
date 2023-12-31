import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultComponent} from "../result/result.component";
import {SummaryComponent} from "../summary/summary.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ResultComponent, SummaryComponent],
  template: `
    <div class="lg:mx-auto shadow-card card-container">
        <div class="card-content">
          <div class="column">
            <app-result></app-result>
          </div>
          <div class="column">
            <app-summary></app-summary>
          </div>
        </div>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}
