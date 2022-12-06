import {ISection} from "../interfaces/isection";

const sections: ISection[] = [
  {
    name: "Job Knowledge",
    competencies: [
      {name: "Understand business need (The Why)"},
      {name: "Make decisions based on team's strategic priorities"},
      {name: "Adhere to best agile/scrum principles"},
      {name: "Domain Knowledge"}
    ]
  },
  {
    name: "Decision Making",
    competencies: [
      {name: "Understand the ROI (Cost vs Value) for technical changes"},
      {name: "Adjusting to shifting priorities (Cost of switching tasks & identifying changes in prioritized tasks)"},
      {name: "LEAN mindset"},
      {name: "Breaks down large projects with minimal assistance"},
      {name: "Ability to simplify complex problems"}
    ]
  },
  {
    name: "Development",
    competencies: [
      {name: "Understand how to avoid introducing tech debt"},
      {name: "Understand how to remove tech debt"},
      {name: "Understand our architecture and framework"},
      {name: "Adhering to test case best practices"},
      {name: "Perform Code reviews to defined best practices"},
      {name: "Lead technical initiatives"},
      {name: "Security conscious in development"},
      {name: "Being the technical knowledge expert"},
      {name: "Implement Established Patterns"},
      {name: "Create new design patterns"},
      {name: "Improve on existing patterns"},
      {name: "Champion new technologies/capabilities to Product"}
    ]
  },
  {
    name: "Dependability",
    competencies: [
      {name: "Be team's top performer(not specifically velocity)"},
      {name: "Go to person on the team"},
      {name: "Identifying and working past roadblocks"},
      {name: "Takes ownership of the product"},
      {name: "Ability to prioritize multiple tasks at the same time"}
    ]
  },
  {
    name: "Work Quantity and Quality",
    competencies: [
      {name: "Committing code (Velocity)"},
      {name: "Produce High Quality Code w/ Minimal Kickback"}
    ]
  },
  {
    name: "Team Work",
    competencies: [
      {name: "Collaborate with Product on Story or Bug"},
      {name: "Collaborate with peers"},
      {name: "Valuable contributor to agile processes"},
      {name: "Mentoring"},
      {name: "Ability to explain technical issues to non-technical people"}
    ]
  },
  {
    name: "Client Focus",
    competencies: [
      {name: "Understand domain of end user"},
      {name: "Resolving ref-to-dev escalations"},
      {name: "Support - develop workarounds, fixes for data, deal with support deadlines"}
    ]
  },
  {
    name: "Communication",
    competencies: [
      {name: "Understands when to seek guidance from others"},
      {name: "Teaches others"}
    ]
  },
  {
    name: "Leadership",
    competencies: [
      {name: "Delegate tasks to other team members"},
      {name: "Provide feedback on other team members"},
      {name: "Lead other team members through larger projects"},
      {name: "Inspires people toward a shared vision"},
      {name: "Ability to contribute to multiple technical projects/teams"},
      {name: "Team Multiplier"},
      {name: "Fosters positive team culture "}
    ]
  }
];

export {sections};
