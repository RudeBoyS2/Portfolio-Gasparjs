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

  export const projectsMockES: Projects = {
    1: {
        title: "Greka Showroom",
        type: "E-Commerce",
        briefDescription: "E-commerce trabajado como freelancer para una cliente de Argentina, hecho con Typescript, NextJS y ChakraUI.",
        description: "E-commerce trabajado como freelancer para una cliente de Argentina, este proyecto consiste en una aplicación e-commerce hecha con NextJS que usa Typescript, integración de API Google Spreadsheet para CMS, y ChakraUI para los estilos.",
        src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223857/grekis1_djwqhl.png",
        stack: "Typescript, NextJS, ChakraUI, Google Spreadsheet API",
        github: "https://github.com/axelromero99/greka",
        web: "https://www.greka-showroom.com/"
    },
    2: {
        title: "GoScrum",
        type: "Web App",
        briefDescription: "Consiste en una aplicación web símil a Trello, creada con React y Redux, y otras librerías.",
        description: "Esta aplicación web fue creada para la aceleración de React de Alkemy Labs. Consiste en una aplicación web símil a Trello, creada con React y Redux, y otras librerías. El usuario puede crear equipos, agregar miembros y crear tareas, las cuales pueden ser movidas entre columnas.",
        src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223856/dfe56e556cefb79af4c923bf43438bcd_mjlida.png",
        stack: "React, Redux, React testing library, framer-motion, Formik/Yup",
        github: "https://github.com/RudeBoyS2/GoScrum",
        web: "https://goscrumbygaspar.netlify.app/"
    },
    3: {
        title: "BeMaster Test",
        type: "Web App",
        briefDescription: "Aplicación web para el test de BeMaster, hecha con React y ChakraUI.",
        description: "Aplicación web para el test de BeMaster, hecha con React y ChakraUI. Consiste en una aplicación símil a Disney+",
        src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666224172/0c33b199e7dee1fe848f6718741a846f_lpqfbv.jpg",
        stack: "React, ChakraUI",
        github: "https://github.com/RudeBoyS2/BeMasterFrontendTest",
        web: "https://bemastertest.netlify.app/"
    },
    4: {
        title: "Portfolio Web",
        type: "Landing page",
        briefDescription: "Landing page creada con NextJS, Typescript y ChakraUI.",
        description: "Landing page creadada con NextJS, Typescript y ChakraUI. Esta página fue creada para mostrar mis proyectos y mi información personal.",
        src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223856/ad1c067b3f6a2b1db5a661b24d5057bb_isqs8f.png",
        stack: "NextJS, Typescript, ChakraUI",
        github: "https://github.com/RudeBoyS2/Portfolio-Gasparjs",
        web: "https://gasparjs.vercel.app/"
    },
  }