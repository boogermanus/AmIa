import {IExpectedCompetency} from "../interfaces/iexpectedCompetency";
import {SkillLevel} from "./skillLevels";



const expectedCompetencies: IExpectedCompetency[] = [
    //Job Knowledge
    {
        competencyId: 1,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 2,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 3,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Proficient,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 4,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Decision Making
    {
        competencyId: 5,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 6,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 7,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 8,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 9,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Development
    {
        competencyId: 10,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 11,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 12,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 13,
        jobLevel: {
            Intern: SkillLevel.Competent,
            Developer: SkillLevel.Proficient,
            Engineer: SkillLevel.Expert,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 14,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 15,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Beginner,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 16,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 17,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 18,
        jobLevel: {
            Intern: SkillLevel.Competent,
            Developer: SkillLevel.Proficient,
            Engineer: SkillLevel.Expert,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
{
        competencyId: 19,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Beginner,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 20,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 21,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Beginner,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Dependability
    {
        competencyId: 22,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 23,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 24,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 25,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 26,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Work Quantity and Quality
    {
        competencyId: 27,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 28,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Team Work
    {
        competencyId: 29,
        jobLevel: {
            Intern: SkillLevel.Competent,
            Developer: SkillLevel.Proficient,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 30,
        jobLevel: {
            Intern: SkillLevel.Competent,
            Developer: SkillLevel.Proficient,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 31,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Beginner,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 32,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Beginner,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 33,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Beginner,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Client Focus
    {
        competencyId: 34,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 35,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Competent,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 36,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Communication
    {
        competencyId: 37,
        jobLevel: {
            Intern: SkillLevel.Competent,
            Developer: SkillLevel.Proficient,
            Engineer: SkillLevel.Proficient,
            SeniorEngineer: SkillLevel.Expert,
            Lead: SkillLevel.Expert,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 38,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Proficient,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    //Leadership
    {
        competencyId: 39,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Novice,
            SeniorEngineer: SkillLevel.Beginner,
            Lead: SkillLevel.Competent,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 40,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Novice,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Competent,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 41,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Novice,
            SeniorEngineer: SkillLevel.Beginner,
            Lead: SkillLevel.Competent,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 42,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Novice,
            SeniorEngineer: SkillLevel.Novice,
            Lead: SkillLevel.Beginner,
            SeniorLead: SkillLevel.Competent,
        }
    },
    {
        competencyId: 43,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Novice,
            SeniorEngineer: SkillLevel.Beginner,
            Lead: SkillLevel.Competent,
            SeniorLead: SkillLevel.Proficient,
        }
    },
    {
        competencyId: 44,
        jobLevel: {
            Intern: SkillLevel.Novice,
            Developer: SkillLevel.Novice,
            Engineer: SkillLevel.Novice,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Proficient,
            SeniorLead: SkillLevel.Expert,
        }
    },
    {
        competencyId: 45,
        jobLevel: {
            Intern: SkillLevel.Beginner,
            Developer: SkillLevel.Beginner,
            Engineer: SkillLevel.Competent,
            SeniorEngineer: SkillLevel.Competent,
            Lead: SkillLevel.Competent,
            SeniorLead: SkillLevel.Proficient,
        }
    }
    //Done :D
]

export{expectedCompetencies};
