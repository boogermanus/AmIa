import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICompetency} from "../../interfaces/icompetency";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {

  @Input()public competency: ICompetency = {id: 0, name: ""}
  @Input()public jobId: number = 0;
  public hideExpected = true;
  constructor(private expectedCompetencyService: ExpectedCompetencyService) { }

  ngOnInit(): void {
  }

  public onValueChanged(event: ISkillLevelChange) {
    let expected = this.expectedCompetencyService.getExpectedCompetencyById(this.competency.id);

    let jobLevel = expected.jobLevels[this.jobId-1];
    this.hideExpected = !(event.newValue < jobLevel);
  }

}
