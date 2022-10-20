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
  }

  export const projectsMockEN: Projects = {
    1: {
      title: "Greka Showroom",
      type: "E-Commerce",
      briefDescription: "E-commerce made as a freelancer for a client from Argentina, made with Typescript, NextJS and ChakraUI.",
      description: "E-commerce made as a freelancer for a client from Argentina, This project consists of a Nextjs e-commerce application that uses Typescript, Google Spreadsheet API integration for CMS, and ChakraUI for styling.",
      src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223857/grekis1_djwqhl.png",
      stack: "Typescript, NextJS, ChakraUI, Google Spreadsheet API",
      github: "https://github.com/axelromero99/greka",
      web: "https://www.greka-showroom.com/"
  },
  2: {
      title: "GoScrum",
      type: "Web App",
      briefDescription: "It consists of a Trello like web application, created with React, Redux, and other libraries.",
      description: "Project for Alkemy's React Acceleration. This project consists in a Kanban-style, list-making application like Trello (https://trello.com), in which user's can make teams (with team members and a team leader) and work under the scrum methodology, posting tasks and changing their current state.",
      src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223856/dfe56e556cefb79af4c923bf43438bcd_mjlida.png",
      stack: "React, Redux, React testing library, framer-motion, Formik/Yup",
      github: "https://github.com/RudeBoyS2/GoScrum",
      web: "https://goscrumbygaspar.netlify.app/"
  },
  3: {
      title: "BeMaster Test",
      type: "Web App",
      briefDescription: "Test project for BeMaster. This project consists in a Disney+ like application.",
      description: "Test project for BeMaster. This project consists in a Disney+ like application.",
      src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223857/f1da06ac33dbe2b3001ce72170cf4636_qlzxb6.png",
      stack: "React, ChakraUI",
      github: "https://github.com/RudeBoyS2/BeMasterFrontendTest",
      web: "https://bemastertest.netlify.app/"
  },
  4: {
      title: "Portfolio Web",
      type: "Landing page",
      briefDescription: "Landing page made with NextJS, Typescript and ChakraUI.",
      description: "Landing page made with NextJS, Typescript and ChakraUI. This page was made to show my information, projects and skills.",
      src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223856/ad1c067b3f6a2b1db5a661b24d5057bb_isqs8f.png",
      stack: "NextJS, Typescript, ChakraUI",
      github: "https://github.com/RudeBoyS2/Portfolio-Gasparjs",
      web: "https://gasparjs.vercel.app/"
  },
  }