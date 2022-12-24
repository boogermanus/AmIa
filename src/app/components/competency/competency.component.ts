import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ICompetency} from "../../interfaces/icompetency";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {

  @Input()public competency: ICompetency = {id: 0, name: ""}
  @Input()public jobId: number = 0;
  @Output()public valueChanged: EventEmitter<ISkillLevelChange> = new EventEmitter<ISkillLevelChange>();
  constructor() { }

  ngOnInit(): void {
  }

  public onValueChanged(event: ISkillLevelChange) {
    console.log(event);
  }

}
