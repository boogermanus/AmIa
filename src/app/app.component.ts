import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public jobId: number = 0;
  constructor() {
  }

  onJobChange(event: string): void {
    this.jobId = +event;
  }
}
