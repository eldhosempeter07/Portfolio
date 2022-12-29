import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

const initialState = {
  themeName: "",
  name: "Eldhose M Peter",
  designation: "Front End Developer",
  profileSummary: `I am a self directed and motivated software developer,
working eﬀectively in dynamic environment, where I can
apply my knowledge and skills for continuous improvement.`,
  linkedin: "https://www.linkedin.com/in/eldhose-m-peter-48867411a/",
  github: "https://github.com/eldhosempeter07",
  emailId: "eldhosempeter07@gmail.com",
  educationDetails: [
    {
      educationName: "Master of Computer Applications",
      collegeName: "College of Engineering Trivandrum",
      year: "2017-2020",
      location: "Trivandrum, Kerala",
      details: `Graduated with a 7.42 GPA from APJ Abdul Kalam Technological University, Kerala`,
    },
    {
      educationName: "Bachelor of Computer Applications",
      collegeName: "Baselious Poulose II Catholicos College",
      year: "2014-2017",
      location: "Piravom, Kerala",
      details: `Graduated with a 7.32 GPA from Mahatma Gandhi University, Kottayam`,
    },
    {
      educationName: "Higher Secondary Education",
      collegeName: "ST Ignatius Higher Secondary School",
      year: "2012-2014",
      location: "Kanjiramattom, Kerala",
      details: `Passed with a 82.4% from Board of Higher Secondary Education, Kerala`,
    },
    {
      educationName: "High School Education",
      collegeName: "Georgian Academy English School",
      year: "2011-2012",
      location: "Thiruvankulam, Kerala",
      details: `Passed with a 94% from Board of Public Examination, Kerala`,
    },
  ],
  workExperience: [
    {
      designation: "Software Engineer",
      companyName: "Neoito Private Limited",
      year: "06/2020-present",
      location: "Kochi, India",
      details: `• Worked on UI development for a dashboard for Business Administrators using React JS.
      • Worked on a project that aims to generate a website for a business purpose based on user input.
     • Created complex UI designs using class-based and functional components. 
      \n• Technology Used : React JS, Node JS, Next JS, Redux, tailwind, axios`,
    },
    {
      designation: "Javascript Developer",
      companyName: "Appadore Private Limited",
      year: "03/2021-05/2022",
      location: "Kochi, India",
      details: `
        • Worked on a project publishes news articles about the updated apps about messej mobile chat application.
        • Worked on a web application which provides pet caring, pet clinic booking and shopping services for pets
        \n• Technology Used : React JS, Redux, SASS, Styled-Components,react-bootstrap, axios
        `,
    },
    {
      designation: "Junior Software Engineer",
      companyName: "Clado Solutions",
      year: "10/2019-09/2021",
      location: "Kochi, India",
      details: `
        • Engaged in performance optimization on the JS/TS applications and pixel perfect conversion of design to code.
        • Managed design, functional approach for UI delivery and worked on major severity issues. 
        \n• Technology Used : React JS,  Redux-saga, SASS, Styled-Components,react-bootstrap, axios
        `,
    },
  ],
  projects: [
    {
      projectName: "Paw Walker",
      techStack: [
        "react js",
        "python",
        "react-redux",
        "styled-components",
        "react-bootstrap",
        "material-ui",
        "axios",
      ],
      imageUrl: projectImages.paw,
      visitLink: "https://www.pawwalker.in/",
      description:
        "Paw walker is a web application which provides pet caring, pet clinic booking and shopping services for pets..",
    },
    {
      projectName: "Tech Club",
      techStack: [
        "next js",
        "node js",
        "react-redux",
        "redux-saga",
        "tailwind",
      ],
      imageUrl: projectImages.tech,
      visitLink: "https://techclub.neoito.com/",
      description:
        "Tech club is a collective of passionate creators who just love to connect peers with the masters of their field",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.THEME_CHANGE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return { ...state };
  }
};

export default reducer;
