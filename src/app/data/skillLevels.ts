import {ISkillLevel} from "../interfaces/iskillLevel";

enum skillLevelsEnum {
    Novice = 1,
    Beginner = 2,
    Competent = 3,
    Proficient = 4,
    Expert = 5
}

const skillLevels: ISkillLevel[] = [
    {
        DisplayText: "Novice",
        Value: skillLevelsEnum.Novice
    },
    {
        DisplayText: "Beginner",
        Value: skillLevelsEnum.Beginner
    },
    {
        DisplayText: "Competent",
        Value: skillLevelsEnum.Competent
    },
    {
        DisplayText: "Proficient",
        Value: skillLevelsEnum.Proficient
    },
    {
        DisplayText: "Expert",
        Value: skillLevelsEnum.Expert
    }
]

export {skillLevels};
export {skillLevelsEnum};