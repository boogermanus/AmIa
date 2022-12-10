import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private requiredScore: number = 0;
  constructor() {
  }

  onJobChange(event: any): void {
    console.log(event);
  }
}
