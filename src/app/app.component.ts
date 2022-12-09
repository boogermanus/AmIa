import { Component } from '@angular/core';
import {SectionService} from "./services/section.service";
import {SkillLevelService} from "./services/skillLevel.service";
import {ISection} from "./interfaces/isection";
import { ISkillLevel } from './interfaces/iskillLevel';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public sections: ISection[];
  public skillLevels: ISkillLevel[];

  constructor(private sectionsService: SectionService, private skillLevelService: SkillLevelService) {
    this.sections = sectionsService.getSections();
    this.skillLevels = skillLevelService.getSkillLevels();
  }
}
