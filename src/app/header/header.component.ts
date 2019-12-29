import { Component, OnInit } from '@angular/core';
import { switchToView } from '../app.utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onNavigate(url: string):void {
    switchToView(`#${url}`);
  }

}
