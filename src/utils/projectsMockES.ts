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
        title: "Pase Ticket",
        type: "Web App",
        briefDescription: "Consiste en una aplicación web que permite comprar entradas para eventos, creando tus propios eventos y vendiendo sus entradas.",
        description: "Pase ticket es una aplicación web de react para e-commerce de entradas para eventos de todo tipo. También incluye un CRM para administrarlo. El cliente es de Corrientes, Argentina.",
        src: "/assets/paseticket.png",
        stack: "React, Javascript, NodeJS, ExpressJS, MongoDB, ChakraUI, Mobbex, react-router-dom, etc.",
        github: "https://github.com/gastonchifflets/pase-ticket-react",
        web: "https://paseticket.com/"
    },
    2: {
        title: "Armoniface",
        type: "LMS",
        briefDescription: "Sistema de Gestión de Aprendizaje y Landing Page sobre armonización facial, con clases para dentistas profesionales.",
        description: "Consiste en un Sistema de Gestión de Aprendizaje y Landing Page desarrollado con NextJS, Typescript, ChakraUI, y NodeJS con MongoDB. El cliente es de Corrientes, Argentina.",
        src: "/assets/armoniface.png",
        stack: "React, NextJS, Typescript, MongoDB, ChakraUI, Next-Auth, etc.",
        github: "https://github.com/LuchoQQ/armoniface",
        web: "https://armoniface.com/"
    },
    3: {
        title: "Planeta Burguers",
        type: "E-Commerce",
        briefDescription: "E-commerce de hamburguesas, hecho con NextJS, Typescript y ChakraUI, con checkout a WhatsApp.",
        description: "E-commerce de hamburguesas, hecho con NextJS, Typescript y ChakraUI, con checkout a WhatsApp. El cliente es de Corrientes, Argentina.",
        src: "/assets/planetaburguers.png",
        stack: "NextJS, Typescript, ChakraUI, Google Spreadsheet API",
        github: "https://github.com/axelromero99/planeta-burguers",
        web: "https://planeta-burguers.vercel.app/"
    },
    4: {
        title: "Greka Showroom",
        type: "E-Commerce",
        briefDescription: "E-commerce trabajado como freelancer para una cliente de Argentina, hecho con Typescript, NextJS y ChakraUI.",
        description: "E-commerce trabajado como freelancer para una cliente de Argentina, este proyecto consiste en una aplicación e-commerce hecha con NextJS que usa Typescript, integración de API Google Spreadsheet para CMS, y ChakraUI para los estilos.",
        src: "/assets/greka.png",
        stack: "Typescript, NextJS, ChakraUI, Google Spreadsheet API",
        github: "https://github.com/axelromero99/greka",
        web: "https://www.greka-showroom.com/"
    },
    5: {
        title: "GoScrum",
        type: "Web App",
        briefDescription: "Consiste en una aplicación web símil a Trello, creada con React y Redux, y otras librerías.",
        description: "Esta aplicación web fue creada para la aceleración de React de Alkemy Labs. Consiste en una aplicación web símil a Trello, creada con React y Redux, y otras librerías. El usuario puede crear equipos, agregar miembros y crear tareas, las cuales pueden ser movidas entre columnas.",
        src: "https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666223856/dfe56e556cefb79af4c923bf43438bcd_mjlida.png",
        stack: "React, Redux, React testing library, framer-motion, Formik/Yup",
        github: "https://github.com/RudeBoyS2/GoScrum",
        web: "https://goscrumbygaspar.netlify.app/"
    },
    6: {
        title: "BeMaster Test",
        type: "Web App",
        briefDescription: "Aplicación web para el test de BeMaster, hecha con React y ChakraUI.",
        description: "Aplicación web para el test de BeMaster, hecha con React y ChakraUI. Consiste en una aplicación símil a Disney+",
        src: "/assets/bemaster.png",
        stack: "React, ChakraUI",
        github: "https://github.com/RudeBoyS2/BeMasterFrontendTest",
        web: "https://bemastertest.netlify.app/"
    },
    7: {
        title: "Portfolio Web",
        type: "Landing page",
        briefDescription: "Landing page creada con NextJS, Typescript y ChakraUI.",
        description: "Landing page creadada con NextJS, Typescript y ChakraUI. Esta página fue creada para mostrar mis proyectos y mi información personal.",
        src: "/assets/portfolio.png",
        stack: "NextJS, Typescript, ChakraUI",
        github: "https://github.com/RudeBoyS2/Portfolio-Gasparjs",
        web: "https://gasparjs.vercel.app/"
    },
  }