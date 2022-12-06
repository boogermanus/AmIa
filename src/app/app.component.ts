import { Component } from '@angular/core';
import {SectionService} from "./services/section.service";
import {ISection} from "./interfaces/isection";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sections: ISection[];
  constructor(private sectionsService: SectionService) {
    this.sections = sectionsService.getSections();
  }
}
