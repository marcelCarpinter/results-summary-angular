import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ResultComponent} from "../result/result.component";
import {SummaryComponent} from "../summary/summary.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, ResultComponent, SummaryComponent],
  template: `
    <div class="container mx-auto py-5 px-5 w-75">
        <div class="d-flex flex-row">
          <div class="w-50">
            <app-result></app-result>
          </div>
          <div class="w-50">
            <app-summary></app-summary>
          </div>
        </div>
    </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent {

}