import ACTION_TYPES from "../constants/actionTypes";
import projectImages from "../constants/images";

const initialState = {
  themeName: "",
  name: "Eldhose M Peter",
  designation: "Software Developer",
  profileSummary: `I am a self directed and motivated software developer,
working eﬀectively in dynamic environment, where I can
apply my knowledge and skills for continuous improvement.`,
  linkedin: "https://www.linkedin.com/in/eldhose-m-peter-48867411a/",
  github: "https://github.com/eldhosempeter07",
  emailId: "eldhosempeter19@gmail.com",
  educationDetails: [
    {
      educationName: "Post graduation Diploma",
      collegeName: "Conestoga College ",
      year: "2024",
      location: "Kitchener, Canada",
      details: "Graduated with a 3.62/4  GPA ",
    },
    {
      educationName: "Master of Computer Applications",
      collegeName: "College of Engineering Trivandrum",
      year: "2017-2020",
      location: "Trivandrum, Kerala",
      details: `Graduated with a 7.42 GPA from APJ Abdul Kalam Technological University, Kerala`,
    },
    // {
    //   educationName: "Bachelor of Computer Applications",
    //   collegeName: "Baselious Poulose II Catholicos College",
    //   year: "2014-2017",
    //   location: "Piravom, Kerala",
    //   details: `Graduated with a 7.32 GPA from Mahatma Gandhi University, Kottayam`,
    // },
    // {
    //   educationName: "Higher Secondary Education",
    //   collegeName: "St Ignatius Higher Secondary School",
    //   year: "2012-2014",
    //   location: "Kanjiramattom, Kerala",
    //   details: `Passed with a 82.4% from Board of Higher Secondary Education, Kerala`,
    // },
    // {
    //   educationName: "High School Education",
    //   collegeName: "Georgian Academy English School",
    //   year: "2011-2012",
    //   location: "Thiruvankulam, Kerala",
    //   details: `Passed with a 94% from Board of Public Examination, Kerala`,
    // },
  ],
  workExperience: [
    {
      designation: "Software Engineer",
      companyName: "Neoito Private Limited",
      year: "06/2022 - 05/2023",
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
  ],
  projects: [
    {
      projectName: "Flavour Fleet",
      techStack: [
        "react js",
        "react-context",
        "tailwind",
        "material-ui",
        "firebase",
      ],
      imageUrl: projectImages.flavourfleet,
      visitLink: "https://flavourzfleet.vercel.app/",
      description:
        "Flavour Fleet is a web-based restaurant management platform that simplifies order processing, inventory tracking, and customer interactions.",
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
