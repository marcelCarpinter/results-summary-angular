import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Result} from "../result";


@Component({
  selector: 'app-score',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="d-flex flex-row p-2 row-score row-{{ result.category.toLowerCase() }}">
      <div class="">
        <img src="{{result.icon}}" alt="" class="px-2">
      </div>
      <div class="grow">
        <p class="px-4">{{result.category}}</p>
      </div>
      <div class="grow text-right">
        <p class="px-4">{{result.score}}/100</p>
      </div>
    </div>
  `,
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  @Input() result!: Result;
}
