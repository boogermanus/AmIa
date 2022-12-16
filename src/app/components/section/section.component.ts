import {Component, Input, OnInit} from '@angular/core';
import {ISection} from "../../interfaces/isection";
import {SectionService} from "../../services/section.service";

@Component({
  selector: 'app-sections',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  public sections: ISection[] = []
  @Input()public disabled: boolean = true;
  @Input()public jobId: number = 0;

  constructor(private sectionService: SectionService) { }

  ngOnInit(): void {
    this.sections = this.sectionService.getSections();
  }

}
