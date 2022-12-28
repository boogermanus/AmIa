import {Component, Input, OnInit} from '@angular/core';
import {RatingService} from "../../services/rating.service";
import {ExpectedCompetencyService} from "../../services/expectedCompetency.service";
import {ISkillLevelChange} from "../../interfaces/iskilllevelchange";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  private _jobId: number = 0;
  @Input()public set jobId(value: number) {
    this._jobId = value;
    this.totalScore = 0;
    this.neededScore = this.expectedCompetencyService.getExpectedScoreByJobId(this._jobId);
    this.rating = 0;
  }
  public get jobId() {
    return this._jobId;
  }

  public neededScore: number = 0;
  public totalScore: number = 0;
  public rating: number = 0;

  public ratingClasses: any = {
    'bg-primary': false,
    'bg-warning': false,
    'bg-danger': false,
    'bg-success': false
  }

  constructor(private ratingService: RatingService, private expectedCompetencyService: ExpectedCompetencyService) {
    this.ratingService.ratingChanged.subscribe(rating => this.onRatingChanged(rating))
  }

  public ngOnInit(): void {
  }

  public onRatingChanged(rating: ISkillLevelChange) {
    if(this.totalScore - rating.previousValue > 0)
      this.totalScore -= rating.previousValue;
    else
      this.totalScore = 0;

    this.totalScore += rating.newValue;
    this.rating = +Math.fround(this.totalScore/this.neededScore).toFixed(2);
    this.setRattingClasses();
  }

  private setRattingClasses(): void {
    this.ratingClasses['bg-primary'] = false;
    this.ratingClasses['bg-warning']= false;
    this.ratingClasses['bg-danger'] = false;
    this.ratingClasses['bg-success'] = false;

    if(this.rating <= 0.25)
      this.ratingClasses['bg-danger'] = true;
    else if(this.rating <= 0.50)
      this.ratingClasses['bg-warning'] = true;
    else if(this.rating <= 0.75)
      this.ratingClasses['bg-primary'] = true;
    else
      this.ratingClasses['bg-success'] = true;
  }

}
