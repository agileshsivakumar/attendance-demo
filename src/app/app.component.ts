import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public days = [1, 2, 3, 4, 5];
  public sessionDay = 0;

  setDay(value: string) {
    this.sessionDay = parseInt(value, 10);
  }
}
