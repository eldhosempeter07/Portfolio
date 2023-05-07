import { SkillWrapper } from "./Skill.styled";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Skill = () => {
  let skillNames = [
    {
      title: "Team Player",
      description:
        "I was able to work effectively and efficiently as part of a team.",
    },
    {
      title: "Communication SKill",
      description:
        " Clear and concise communication skills as demonstrated through interaction with team members",
    },
    {
      title: " Organizational skills",
      description:
        "I have constantly developed and improved my organization skills through my projects and education.",
    },
    {
      title: "Presentation skills",
      description:
        "Gained through participation in course seminars and presentation of projects.",
    },
    {
      title: "Fast Learner",
      description:
        "I am a fast learner and able to adapt to any difficult situation easily and effectively.",
    },
  ];
  
  return (
    <SkillWrapper id="skills">
      <h1 className="d-flex flex-column align-items-center">Skills</h1>

      {skillNames.map((skill) => {
        return (
          <div>
            <h4 className="mt-4">
              • {skill.title} - {skill.description}
            </h4>
          </div>
        );
      })}
    </SkillWrapper>
  );
};

export default Skill;
