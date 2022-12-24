import {Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren} from '@angular/core';
import {ISkillLevel} from "../../interfaces/iskillLevel";
import {SkillLevelService} from "../../services/skillLevel.service";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";
import {FormControl} from "@angular/forms";
import {pairwise, startWith} from "rxjs";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";

@Component({
  selector: 'app-skill-level',
  templateUrl: './skill-level.component.html',
  styleUrls: ['./skill-level.component.css']
})
export class SkillLevelComponent implements OnInit {

  public skillLevels: ISkillLevel[] = []

  @Input() public jobId: number = 0;
  @Output() public valueChanged: EventEmitter<ISkillLevelChange> = new EventEmitter<ISkillLevelChange>();
  public select: FormControl = new FormControl('');

  constructor(private skillLevelService: SkillLevelService) {
  }

  ngOnInit(): void {
    this.skillLevels = this.skillLevelService.getSkillLevels();
    this.select.valueChanges.pipe(
      startWith(this.select.value),
      pairwise()
    ).subscribe(([old,value]) => {
      let previousValue: number = +old;
      let newValue: number = +value;
      this.valueChanged.emit({previousValue, newValue});
    });
  }
}
