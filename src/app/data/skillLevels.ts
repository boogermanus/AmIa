import {ISkillLevel} from "../interfaces/iskillLevel";
import {SkillLevel} from "../enums/skill-level";

const skillLevels: ISkillLevel[] = [
    {
        DisplayText: "Novice",
        Value: SkillLevel.Novice
    },
    {
        DisplayText: "Beginner",
        Value: SkillLevel.Beginner
    },
    {
        DisplayText: "Competent",
        Value: SkillLevel.Competent
    },
    {
        DisplayText: "Proficient",
        Value: SkillLevel.Proficient
    },
    {
        DisplayText: "Expert",
        Value: SkillLevel.Expert
    }
]

export {skillLevels};
export {SkillLevel};
