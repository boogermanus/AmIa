import {Component, Input, OnInit, QueryList, ViewChildren} from '@angular/core';
import {ISkillLevel} from "../../interfaces/iskillLevel";
import {SkillLevelService} from "../../services/skillLevel.service";
import {MatSelect} from "@angular/material/select";
import {IExpectedCompetency} from "../../interfaces/iexpectedCompetency";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.css']
})
export class SkillLevelComponent implements OnInit {

  public skillLevels: ISkillLevel[] = []
  @Input() public jobId: number = 0;

  constructor(private skillLevelService: SkillLevelService, private expectedCompetencyService: ExpectedCompetencyService) {
  }

  ngOnInit(): void {
    this.skillLevels = this.skillLevelService.getSkillLevels();
  }

  public onSelectionChange(): void {
    // this is just when _one_ value changes.
    // identify the one.
    console.log('onSelectionChange');
  }

  public onOpenedChange(): void {
    console.log('onOpenedChange')
  }

}
