import {IExpectedCompetency} from "../interfaces/iexpectedCompetency";
import {skillLevelsEnum} from "./skillLevels";



const expectedCompetencies: IExpectedCompetency[] = [
    //Job Knowledge
    {
        competencyId: 1,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 2,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 3,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Proficient,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 4,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Decision Making
    {
        competencyId: 5,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 6,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 7,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 8,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 9,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Development
    {
        competencyId: 10,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 11,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 12,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 13,
        jobLevel: {
            Intern: skillLevelsEnum.Competent,
            Developer: skillLevelsEnum.Proficient,
            Engineer: skillLevelsEnum.Expert,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 14,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 15,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Beginner,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 16,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 17,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 18,
        jobLevel: {
            Intern: skillLevelsEnum.Competent,
            Developer: skillLevelsEnum.Proficient,
            Engineer: skillLevelsEnum.Expert,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
{
        competencyId: 19,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Beginner,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 20,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 21,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Beginner,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Dependability
    {
        competencyId: 22,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 23,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 24,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 25,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 26,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Work Quantity and Quality
    {
        competencyId: 27,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 28,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Team Work
    {
        competencyId: 29,
        jobLevel: {
            Intern: skillLevelsEnum.Competent,
            Developer: skillLevelsEnum.Proficient,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 30,
        jobLevel: {
            Intern: skillLevelsEnum.Competent,
            Developer: skillLevelsEnum.Proficient,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 31,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Beginner,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 32,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Beginner,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 33,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Beginner,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Client Focus
    {
        competencyId: 34,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 35,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Competent,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 36,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Communication
    {
        competencyId: 37,
        jobLevel: {
            Intern: skillLevelsEnum.Competent,
            Developer: skillLevelsEnum.Proficient,
            Engineer: skillLevelsEnum.Proficient,
            SeniorEngineer: skillLevelsEnum.Expert,
            Lead: skillLevelsEnum.Expert,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 38,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Proficient,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    //Leadership
    {
        competencyId: 39,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Novice,
            SeniorEngineer: skillLevelsEnum.Beginner,
            Lead: skillLevelsEnum.Competent,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 40,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Novice,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Competent,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 41,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Novice,
            SeniorEngineer: skillLevelsEnum.Beginner,
            Lead: skillLevelsEnum.Competent,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 42,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Novice,
            SeniorEngineer: skillLevelsEnum.Novice,
            Lead: skillLevelsEnum.Beginner,
            SeniorLead: skillLevelsEnum.Competent,
        }
    },
    {
        competencyId: 43,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Novice,
            SeniorEngineer: skillLevelsEnum.Beginner,
            Lead: skillLevelsEnum.Competent,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    },
    {
        competencyId: 44,
        jobLevel: {
            Intern: skillLevelsEnum.Novice,
            Developer: skillLevelsEnum.Novice,
            Engineer: skillLevelsEnum.Novice,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Proficient,
            SeniorLead: skillLevelsEnum.Expert,
        }
    },
    {
        competencyId: 45,
        jobLevel: {
            Intern: skillLevelsEnum.Beginner,
            Developer: skillLevelsEnum.Beginner,
            Engineer: skillLevelsEnum.Competent,
            SeniorEngineer: skillLevelsEnum.Competent,
            Lead: skillLevelsEnum.Competent,
            SeniorLead: skillLevelsEnum.Proficient,
        }
    }
    //Done :D
]

export{expectedCompetencies};