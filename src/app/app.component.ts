import { Component } from '@angular/core';
import {SectionService} from "./services/section.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private sectionsService: SectionService) {
  }
}
