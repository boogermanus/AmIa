import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ICompetency} from "../../interfaces/icompetency";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";
import {SkillLevelComponent} from "../skill-level/skill-level.component";
import {SkillLevel} from "../../enums/skill-level";

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {

  @Input()public competency: ICompetency = {id: 0, name: ""}
  @Input()public jobId: number = 0;
  public hideExpected = true;
  public hasValue = false;
  public skillLevelMessage = "";
  @Output()public valueChanged:EventEmitter<ISkillLevelChange> = new EventEmitter<ISkillLevelChange>();
  @ViewChildren(SkillLevelComponent)public skillLevels!: QueryList<SkillLevelComponent>;

  constructor(private expectedCompetencyService: ExpectedCompetencyService) { }

  public ngOnInit(): void {
  }

  public onValueChanged(event: ISkillLevelChange) {
    let expected = this.expectedCompetencyService.getExpectedCompetencyById(this.competency.id);

    let jobLevel = expected.jobLevels[this.jobId-1];
    this.skillLevelMessage = `Skill level not met. Expected: ${SkillLevel[jobLevel]}`;
    this.hideExpected = !(event.newValue < jobLevel);
    this.hasValue = true;
    this.valueChanged.emit(event);
  }

  public clear(): void {
    this.hasValue = false;
    this.hideExpected = true;
    this.skillLevels.forEach(sl => sl.clearValue());
  }

}
