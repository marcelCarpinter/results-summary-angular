import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rounded-result bg-result py-4 px-5">
      <div class="rounded-full mb-2 mx-auto">
        <div class="">
            <h1 class="title-result">Your result</h1>
        </div>
      </div>
      <div>
        <div class="rounded-full bg-result-total circle mx-auto">
          <div class="circle-content">
            <p class="title-result">76</p>
            <p class="subtitle-result">of 100</p>
          </div>
        </div>
        <div>
          <div>
            <p class="overall-result">Great</p>
          </div>
          <div>
            <p class="mx-auto description">You scored higher than <span id="percentage">65</span>% of the people who have taken these tests</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./result.component.css']
})
export class ResultComponent {

}
