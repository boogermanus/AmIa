import { Component, OnInit } from '@angular/core';
import {ISection} from "../../interfaces/isection";
import {SectionService} from "../../services/section.service";
import {SkillLevelService} from "../../services/skillLevel.service";
import {ISkillLevel} from "../../interfaces/iskillLevel";

@Component({
  selector: 'app-sections',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public sections: ISection[] = []
  public skillLevels: ISkillLevel[] = [];
  constructor(private sectionService: SectionService, private skillLevelService: SkillLevelService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections();
    this.skillLevels = this.skillLevelService.getSkillLevels();
  }

}
