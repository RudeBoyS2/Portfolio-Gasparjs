import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Box, Button, Flex } from "@chakra-ui/react";
import Main from "../layout/Main";
import ParticlesBackground from "../components/ParticlesBackground";
import particles2 from "../utils/particles2.json";
import About from "../layout/About";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";
import { useRouter } from "next/router";
import Flag from "react-flagkit";
import Welcome from "../components/Welcome";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  });

  return (
    <>
      <Head>
        <title>GasparJS</title>
        <meta name="Gasparjs" content="Portfolio Web" />
        <meta
          name="description"
          content="Portfolio Web de Gaspar Escobar Fullstack Developer creado con Nextjs y ChakraUI"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimatePresence>
        <Flex w="fit-content">
          <Welcome />
          <Flex w={{ lg: "25vw" }}>
            <Sidebar />
          </Flex>
          <Flex
            //  key="container"
            //  as={motion.div}
            //  initial={{ opacity: 0 }}
            w={{ base: "100vw", lg: "75vw" }}
            h="auto"
            justifyContent="center"
            alignContent="center"
            flexDir="column"
            position="relative"
            display={isLoading ? "none" : "block"}
          >
            {locale === "en-US" ? (
              <Button
                as={motion.button}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.5, ease: "easeIn", delay: 8 },
                }}
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
                fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
                onClick={() => {
                  router.push("/", "/", { locale: "es-AR" });
                }}
              >
                <p>EN</p>
                <Flag country="US" size={25} />
              </Button>
            ) : (
              <Button
                as={motion.button}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 1.5, ease: "easeIn", delay: 8 },
                }}
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
                fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
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

          {/* <Flex w={{ lg: "25vw" }}>
            <Sidebar />
          </Flex>
          <Flex
            //  key="container"
            //  as={motion.div}
            //  initial={{ opacity: 0 }}
            w={{ base: "100vw", lg: "75vw" }}
            h="auto"
            justifyContent="center"
            alignContent="center"
            flexDir="column"
            position="relative"
            display={isLoading ? "none" : "block"}
          >
            {locale === "en-US" ? (
              <Button
                as={motion.button}
                initial={{ x: 200 }}
                animate={{
                  x: 0,
                  transition: { duration: 2.5, ease: "easeIn" },
                }}
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
                fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
                onClick={() => {
                  router.push("/", "/", { locale: "es-AR" });
                }}
              >
                <p>EN</p>
                <Flag country="US" size={25} />
              </Button>
            ) : (
              <Button
                as={motion.button}
                initial={{ x: 200 }}
                animate={{
                  x: 0,
                  transition: { duration: 2.5, ease: "easeIn" },
                }}
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
                fontSize={{ base: "sm", lg: "lg", xl: "xl" }}
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
          </Flex> */}
        </Flex>
      </AnimatePresence>

      {/* <ParticlesBackground particles={particles2} /> */}
    </>
  );
};

export default Home;
