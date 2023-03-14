export type Project = {
  title: string;
  type: string;
  briefDescription: string;
  description: string;
  src: string;
  stack: string;
  github: string;
  web: string;
};

type Projects = {
  [key: string]: Project;
};

export const projectsMockEN: Projects = {
  1: {
    title: "Pase Ticket",
    type: "Web App",
    briefDescription:
      "It consists of a web application that allows you to buy tickets for events, creating your own events and selling their tickets.",
    description:
      "Pase ticket is a react web app for e-commerce of tickets for events of all kinds. It also includes a CRM to manage it. The client is from Corrientes, Argentina.",
    src: "/assets/paseticket.png",
    stack:
      "React, Javascript, NodeJS, ExpressJS, MongoDB, ChakraUI, Mobbex, react-router-dom, etc.",
    github: "https://github.com/gastonchifflets/pase-ticket-react",
    web: "https://paseticket.com/",
  },
  2: {
    title: "Armoniface",
    type: "LMS",
    briefDescription:
      "Learning Management System and Landing Page about facial armonization, with classes for professional dentists.",
    description:
      "It consists of an Leaning Management System and Landing Page developed with NextJS, Typescript, ChakraUI, and NodeJS with MongoDB. The client is from Corrientes, Argentina.",
    src: "/assets/armoniface.png",
    stack: "React, NextJS, Typescript, MongoDB, ChakraUI, Next-Auth, etc.",
    github: "https://github.com/LuchoQQ/armoniface",
    web: "https://armoniface.com/",
  },
  3: {
    title: "Planeta Burguers",
    type: "E-Commerce",
    briefDescription:
      "This application consists of an food e-commerce developed using NextJS and Typescript, with checkout to WhatsApp.",
    description:
      "This application consists of an food e-commerce created with NextJS and Typescript, with checkout to WhatsApp, and uses an integration with the Google Sheets API, using a spreadsheet as a database. The client is from Corrientes, Argentina.",
    src: "/assets/planetaburguers.png",
    stack: "NextJS, NodeJS, Google Spreadsheet API integration for CMS, Papaparse, Chakra UI. CI/CD and deployed in Vercel. Use of Trello and weekly meets for agile methodologies. Figma for UI design. Github and GIT for repositories.",
    github: "https://github.com/axelromero99/planeta-burguers",
    web: "https://planeta-burguers.vercel.app/",
  },
  4: {
    title: "Greka Showroom",
    type: "E-Commerce",
    briefDescription:
      "E-commerce made as a freelancer for a client from Argentina, made with Typescript, NextJS and ChakraUI.",
    description:
      "E-commerce made as a freelancer for a client from Argentina, This project consists of a Nextjs e-commerce application that uses Typescript, Google Spreadsheet API integration for CMS, and ChakraUI for styling.",
    src: "/assets/greka.png",
    stack: "Typescript, NextJS, ChakraUI, Google Spreadsheet API",
    github: "https://github.com/axelromero99/greka",
    web: "https://www.greka-showroom.com/",
  },
  5: {
    title: "GoScrum",
    type: "Web App",
    briefDescription:
      "It consists of a Trello like web application, created with React, Redux, and other libraries.",
    description:
      "Project for Alkemy's React Acceleration. This project consists in a Kanban-style, list-making application like Trello (https://trello.com), in which user's can make teams (with team members and a team leader) and work under the scrum methodology, posting tasks and changing their current state.",
    src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223856/dfe56e556cefb79af4c923bf43438bcd_mjlida.png",
    stack: "React, Redux, React testing library, framer-motion, Formik/Yup",
    github: "https://github.com/RudeBoyS2/GoScrum",
    web: "https://goscrumbygaspar.netlify.app/",
  },
  6: {
    title: "BeMaster Test",
    type: "Web App",
    briefDescription:
      "Test project for BeMaster. This project consists in a Disney+ like application.",
    description:
      "Test project for BeMaster. This project consists in a Disney+ like application.",
    src: "/assets/bemaster.png",
    stack: "React, ChakraUI",
    github: "https://github.com/RudeBoyS2/BeMasterFrontendTest",
    web: "https://bemastertest.netlify.app/",
  },
  7: {
    title: "Portfolio Web",
    type: "Landing page",
    briefDescription: "Landing page made with NextJS, Typescript and ChakraUI.",
    description:
      "Landing page made with NextJS, Typescript and ChakraUI. This page was made to show my information, projects and skills.",
    src: "/assets/portfolio.png",
    stack: "NextJS, Typescript, ChakraUI",
    github: "https://github.com/RudeBoyS2/Portfolio-Gasparjs",
    web: "https://gasparjs.com/",
  },
};
