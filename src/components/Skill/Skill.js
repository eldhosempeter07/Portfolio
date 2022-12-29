import SkillCard from "../SkillCard/SkillCard";
import { SkillWrapper } from "./Skill.styled";
import React from "react";
import Slider from "react-slick";
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
  let settings = {
    dots: false,
    infinite: true,
    className: "skill-card",
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 900,
    // cssEase: "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2500,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          speed: 2500,
        },
      },
    ],
  };

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
