import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {JobsService} from "../../services/jobs.service";
import {IJob} from "../../interfaces/ijob";
import {MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  public jobs: IJob[] = [];
  @Output() jobChanged = new EventEmitter<string>;
  @ViewChild(MatSelect) job!: MatSelect;
  constructor(private jobService: JobsService) {
    this.jobs = this.jobService.getJobs();
  }

  ngOnInit(): void {
  }

  public onChange(): void {
    console.log('test')
    this.jobChanged.emit(this.job.value);
  }
}
