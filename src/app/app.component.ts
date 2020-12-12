import { Component } from '@angular/core';
import { ELearningService } from './services/e-learning.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  elementsArray = ['Topics Wise Fetching....', 'Chapter Loading', 'Filtering Out...'];
  data: any;
  index = 0;
  constructor(public auth: ELearningService) {
    setInterval(() => {
      this.increaseMsg(this.index);
      this.index++;
    }, 500);
  }

  increaseMsg(i: any) {
    this.data = this.elementsArray[i];
    if (this.index === this.elementsArray.length) {
      this.index = 0;
    }
  }
}
