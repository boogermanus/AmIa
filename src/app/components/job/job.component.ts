import { Component, OnInit } from '@angular/core';
import {JobsService} from "../../services/jobs.service";
import {IJob} from "../../interfaces/ijob";

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css']
})
export class JobComponent implements OnInit {

  public jobs: IJob[] = [];

  constructor(private jobService: JobsService) {
    this.jobs = this.jobService.getJobs();
  }

  ngOnInit(): void {
  }

}
