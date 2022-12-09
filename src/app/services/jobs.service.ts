import { Injectable } from '@angular/core';
import {IJob} from "../interfaces/ijob";
import {jobs} from "../data/jobs";

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private jobs: IJob[] = jobs;
  constructor() { }

  public getJobs(): IJob[] {
    return this.jobs;
  }
}
