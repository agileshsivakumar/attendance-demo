import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public days = [1, 2, 3, 4, 5];
  public day = 0;

  constructor() {
    console.log(this.day);
  }

  setDay(value: string) {
    this.day = parseInt(value, 10);
  }
}
