import {IExpectedCompetency} from "../interfaces/iexpectedCompetency";
import {SkillLevel} from "./skillLevels";


const expectedCompetencies: IExpectedCompetency[] = [
  //Job Knowledge
  {
    competencyId: 1,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 2,
    jobLevels: [SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 3,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 4,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  //Decision Making
  {
    competencyId: 5,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 6,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 7,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 8,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 9,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
    ]
  },
  //Development
  {
    competencyId: 10,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
    ]
  },
  {
    competencyId: 11,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 12,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 13,
    jobLevels: [
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 14,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 15,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 16,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 17,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 18,
    jobLevels: [
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 19,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient
    ]
  },
  {
    competencyId: 20,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 21,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  //Dependability
  {
    competencyId: 22,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 23,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 24,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 25,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 26,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  //Work Quantity and Quality
  {
    competencyId: 27,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 28,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  //Team Work
  {
    competencyId: 29,
    jobLevels: [
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 30,
    jobLevels: [
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 31,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient
    ]
  },
  {
    competencyId: 32,
    jobLevels: [
       SkillLevel.Novice,
   SkillLevel.Novice,
   SkillLevel.Beginner,
   SkillLevel.Competent,
   SkillLevel.Proficient,
   SkillLevel.Expert
    ]
  },
  {
    competencyId: 33,
    jobLevels: [
       SkillLevel.Novice,
   SkillLevel.Beginner,
   SkillLevel.Beginner,
   SkillLevel.Competent,
   SkillLevel.Proficient,
   SkillLevel.Expert
    ]
  },
  //Client Focus
  {
    competencyId: 34,
    jobLevels: [
       SkillLevel.Novice,
   SkillLevel.Beginner,
   SkillLevel.Competent,
   SkillLevel.Proficient,
   SkillLevel.Proficient,
   SkillLevel.Proficient
    ]
  },
  {
    competencyId: 35,
    jobLevels: [
       SkillLevel.Novice,
   SkillLevel.Competent,
   SkillLevel.Proficient,
   SkillLevel.Expert,
   SkillLevel.Expert,
   SkillLevel.Expert
    ]
  },
  {
    competencyId: 36,
    jobLevels: [
       SkillLevel.Novice,
   SkillLevel.Beginner,
   SkillLevel.Proficient,
   SkillLevel.Expert,
   SkillLevel.Expert,
   SkillLevel.Expert
    ]
  },
  //Communication
  {
    competencyId: 37,
    jobLevels: [
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert,
      SkillLevel.Expert,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 38,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  //Leadership
  {
    competencyId: 39,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient
    ]
  },
  {
    competencyId: 40,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Competent,
      SkillLevel.Proficient
    ]
  },
  {
    competencyId: 41,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient
    ]
  },
  {
    competencyId: 42,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent
    ]
  },
  {
    competencyId: 43,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Proficient
    ]
  },
  {
    competencyId: 44,
    jobLevels: [
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Novice,
      SkillLevel.Competent,
      SkillLevel.Proficient,
      SkillLevel.Expert
    ]
  },
  {
    competencyId: 45,
    jobLevels: [
      SkillLevel.Beginner,
      SkillLevel.Beginner,
      SkillLevel.Competent,
      SkillLevel.Competent,
      SkillLevel.Competent,
      SkillLevel.Proficient
    ]
  }
  //Done :D
]

export {expectedCompetencies};
