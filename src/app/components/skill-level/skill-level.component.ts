import { Component, OnInit } from '@angular/core';
import {ISkillLevel} from "../../interfaces/iskillLevel";
import {SkillLevelService} from "../../services/skillLevel.service";

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.css']
})
export class SkillLevelComponent implements OnInit {

  public skillLevels: ISkillLevel[] = []
  constructor(private skillLevelService: SkillLevelService) { }

  ngOnInit(): void {
    this.skillLevels = this.skillLevelService.getSkillLevels();
  }

}
