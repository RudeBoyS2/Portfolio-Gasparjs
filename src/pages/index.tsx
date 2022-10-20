import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Grid, Flex } from "@chakra-ui/react";
import Main from "../layout/Main";
import ParticlesBackground from "../components/ParticlesBackground";
import particles2 from "../utils/particles2.json";
import About from "../layout/About";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";

const Home: NextPage = () => { 
  return (
    <>
      <Head>
        <title>Projects</title>
        <meta name="Gasparjs" content="Web-Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Flex w={{base: "fit-content", sm: "100%"}}> */}
      <Flex>
        <Flex w={{lg: "25vw"}}>
        <Sidebar />
        </Flex>
        <Flex
          w={{lg: "75vw"}}
          h="auto"
          justifyContent="center"
          alignContent="center"
          flexDir="column"
        >
          <Main />
          <About />
          <Projects />
          <Contact />
        </Flex>
      </Flex>

      <ParticlesBackground particles={particles2} />
    </>
  );
};

export default Home;
