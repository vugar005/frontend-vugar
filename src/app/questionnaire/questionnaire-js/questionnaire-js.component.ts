import { Component, OnInit } from '@angular/core';
enum ProgressTypes  {
  low = 'low',
  medium = 'medium',
  high = 'high',
  expert = 'expert'
}
@Component({
  selector: 'questionnaire-js',
  templateUrl: './questionnaire-js.component.html',
  styleUrls: ['./questionnaire-js.component.scss']
})
export class QuestionnaireJsComponent implements OnInit {
  progressState = 'medium';
  constructor() { }

  ngOnInit() {
  }

  onProgressClick(e:MouseEvent) {
    const parent = document.getElementById('progress');
    const percent = (e.offsetX / parent.clientWidth) * 100;
    this.progressState = this.getProgressState(percent);
  }

  getProgressState(percent: number):string {
    if(percent > 0 && percent <= 25) {
      return  ProgressTypes.low;
    } else if(percent > 25 && percent <= 50) {
      return ProgressTypes.medium;
    } else if(percent > 50 && percent <= 75) {
      return ProgressTypes.high;
    } else if (percent > 75) {
      return ProgressTypes.expert;
    }
  }
  getPointerX() {
    switch(this.progressState) {
      case 'low':
        return 'calc(25% - 14px)'
      case 'medium':
        return 'calc(50% - 14px)'
      case 'high':
        return 'calc(75% - 14px)'
      case 'expert':
        return 'calc(100% - 14px)'
    }
  }
}
