import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Button, Flex } from "@chakra-ui/react";
import Main from "../layout/Main";
import ParticlesBackground from "../components/ParticlesBackground";
import particles2 from "../utils/particles2.json";
import About from "../layout/About";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";
import { useRouter } from "next/router";
import Flag from "react-flagkit";

const Home: NextPage = () => { 
  const router = useRouter();
  const { locale } = useRouter();

  return (
    <>
      <Head>
        <title>GasparJS</title>
        <meta name="Gasparjs" content="Portfolio Web" />
        <meta name="description" content="Portfolio Web de Gaspar Escobar Fullstack Developer creado con Nextjs y ChakraUI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex w="fit-content">
        <Flex w={{lg: "25vw"}}>
        <Sidebar />
        </Flex>
        <Flex
          w={{base: "100vw", lg: "75vw"}}
          h="auto"
          justifyContent="center"
          alignContent="center"
          flexDir="column"
          position="relative"        
        >
          {locale === "en-US" ? (
          <Button
          display="flex"
          gap="1"
          justifyContent="center"
            position="fixed"
            zIndex="150"
            right="0"
            top="0"
            bg="none"
            _hover={{ bg: "none" }}
            _active={{ border: "none" }}
            aria-label="switch language button"
            fontSize={{base: "sm", lg: "lg", xl: "xl"}}
            onClick={() => {
              router.push("/", "/", { locale: "es-AR" });
            }}
          > 
            <p>EN</p>
            <Flag country="US" size={25} />
          </Button>
        ) : (
          <Button
          display="flex"
          gap="1"
            position="fixed"
            zIndex="150"
            right="0"
            top="0"
            bg="none"
            _hover={{ bg: "none" }}
            _active={{ border: "none" }}
            aria-label="switch language button"
            color="#141516"
            fontSize={{base: "sm", lg: "lg", xl: "xl"}}
            onClick={() => {
              router.push("/", "/", { locale: "en-US" });
            }}
          >
            <p>ES</p>
            <Flag country="AR" size={25} />
          </Button>
        )}
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
