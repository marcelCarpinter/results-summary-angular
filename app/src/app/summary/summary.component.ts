import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScoreComponent} from "../score/score.component";
import {Result} from "../result";

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [CommonModule, ScoreComponent],
  template: `
    <div class="py-4 px-5">
      <div>
        <p class="title-summary">Summary</p>
      </div>
      <div>
        <app-score *ngFor="let result of results" [result]="result" ></app-score>
      </div>
      <div class="mt-5">
        <button class="btn btn-result w-full">Continue</button>
      </div>
    </div>
  `,
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent {
  results: Result[] = [
    {
      "category": "Reaction",
      "score": 80,
      "icon": "./assets/images/icon-reaction.svg"
    },
    {
      "category": "Memory",
      "score": 92,
      "icon": "./assets/images/icon-memory.svg"
    },
    {
      "category": "Verbal",
      "score": 61,
      "icon": "./assets/images/icon-verbal.svg"
    },
    {
      "category": "Visual",
      "score": 72,
      "icon": "./assets/images/icon-visual.svg"
    }
  ];

}
