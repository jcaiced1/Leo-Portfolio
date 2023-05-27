import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  //bestbuy,
  //fresnocitycollege,
  walmart,
  //hospira,
  carrent,
  jobit,
  tripguide,
  threejs,
  starbucks,
  //meta,
  tesla,
  shopify,
  fresnocitycollege,
  bestbuy,
  hospira,
  cplusplus,
  c,
  python,
  autocad,
  project,
  industrial,
  programmer,
  webdeveloper,
  lina,
  camila,
  esmeralda,
} from "../assets/";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [

  {
    title: "Industrial Engineer",
    icon: industrial,
  },
  {
    title: "Project Manager",
    icon: project,
  },
  {
    title: "Software Developer",
    icon: programmer,
  },
  {
    title: "Web Developer",
    icon: webdeveloper,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name:"cplusplus",
    icon: cplusplus,
  },
  {
    name:"c",
    icon: c,
  },
  {
    name:"python",
    icon: python,
  },
  {
    name:"autocad",
    icon: autocad,
  }
];

const experiences = [
  {
    title: "Engineering Technician",
    company_name: "Pfizer-Hospira",
    icon: hospira,
    iconBg: "#E6DEDD",
    date: "Feb 2014 - Oct 2015",
    points: [
      "Supporting the manufacturing department's efforts to ensure the accuracy and quality of manufactured parts in compliance with FDA guidelines.", 
      "Developing and implemented effective test methods to verify the functionality and performance of parts.", 
      "Executing various projects for the industrial engineering department.", 
      "Utilizing my technical expertise to optimize production processes and enhance efficiency."
    ],
  },
  
  {
    title: "Merchandising Analyst",
    company_name: "Walmart",
    icon: walmart,
    iconBg: "#383E56",
    date: "Jan 2016 - Feb 2018",
    points: [
      "Analyzing sales forecasts to increase category growth through the use of internal merchandising tools and retailer guidelines.", 
      "Utilizing space planning software platforms to design effective product layouts and planograms.", 
      "Staying informed on market trends and competition to inform category management decisions."
    ],
  },

  {
    title: "Customer Service",
    company_name: "Fresno Wholesale",
    icon: bestbuy,
    iconBg: "#E6DEDD",
    date: "Jul 2019 - Jun 2020",
    points: [
        "Providing excellent service to customers by assisting with purchasing decisions.", 
        "Resolving issues and concerns, fulfilling orders, and finding appropriate product substitutions as needed.", 
        "Paying close attention to detail to ensure order accuracy and consulted with customers to guarantee satisfaction."
    ],
  },
  
  {
    title: "Computer Science Student",
    company_name: "Fresno City College",
    icon: fresnocitycollege,
    iconBg: "#383E56",
    date: "May 2021 - Present",
    points: [
        "Engaging in lectures, discussions, and collaborative projects to enhance knowledge and skills.",
        "Proficiently utilizing coding languages, such as Python and C++, to develop software solutions.",
        "Seeking opportunities to further expand proficiency in Python and C++ through practical experience and personal projects.",
        "Actively exploring new technologies and frameworks to enhance problem-solving abilities."
    ],
  },

];

const testimonials = [
  {
    testimonial:
      "I personally know Mr. Caicedo who is a highly trained professional. I highlight his high level of demand for details.",
    name: "Lina",
    designation: "Manager",
    company: "Walmart",
    image: lina,
  },
  {
    testimonial:
      "I have known Leonardo for many years, he is a great worker, he has always finished his tasks on time.",
    name: "Camila",
    designation: "Manager",
    company: "Boost Mobile",
    image: camila,
  },
  {
    testimonial:
      "Leonardo is an exceptional professional who consistently demonstrates true passion for his work.",
    name: "Esmeralda",
    designation: "Mechanical Engineer",
    company: "FCC",
    image: esmeralda,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };