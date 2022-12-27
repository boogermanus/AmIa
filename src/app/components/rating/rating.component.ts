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
  }

}
