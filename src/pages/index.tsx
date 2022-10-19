import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Grid } from "@chakra-ui/react";
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

      <Grid autoFlow="column" justifyContent="center" w={{base: "fit-content", sm: "100%"}}>
        <Sidebar />
        <Grid
          w={{lg: "75vw"}}
          h="auto"
          justifyContent="center"
          alignContent="center"
        >
          <Main />
          <About />
          <Projects />
          <Contact />
        </Grid>
      </Grid>

      <ParticlesBackground particles={particles2} />
    </>
  );
};

export default Home;
