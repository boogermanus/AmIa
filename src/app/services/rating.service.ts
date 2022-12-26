import { Injectable } from '@angular/core';
import {Subject} from "rxjs";
import {ISkillLevelChange} from "../interfaces/iskilllevelchange";

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private ratingChangedSubject: Subject<ISkillLevelChange> = new Subject<ISkillLevelChange>();
  public ratingChanged = this.ratingChangedSubject.asObservable();
  constructor() { }

  public announceRatingChange(change: ISkillLevelChange): void {
    this.ratingChangedSubject.next(change);
  }
}
