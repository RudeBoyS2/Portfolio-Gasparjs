import type { NextPage } from "next";
import Head from "next/head";
import Sidebar from "../layout/Sidebar";
import { Button, Flex } from "@chakra-ui/react";
import Main from "../layout/Main";
import About from "../layout/About";
import Projects from "../layout/Projects";
import Contact from "../layout/Contact";
import { useRouter } from "next/router";
import Flag from "react-flagkit";
import Welcome from "../components/Welcome";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Home: NextPage = () => {
  const router = useRouter();
  const { locale } = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [alreadyVisited, setAlreadyVisited] = useState(false);

  useEffect(() => {
    const storedValue = localStorage.getItem("alreadyVisited");
    if (storedValue) {
      setAlreadyVisited(storedValue === "true");
    } else {
      setTimeout(() => {
        setAlreadyVisited(true)
        localStorage.setItem("alreadyVisited", "true");
      }, 8500);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('alreadyVisited') === null){
    setTimeout(() => {
      setIsLoading(false);
    }, 9000);
    } else {
      setIsLoading(false)
    }
  }, []);

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
      <Flex w="fit-content">
        {!alreadyVisited && <Welcome />}
        {!isLoading && (
          <>
            <Flex w={{ lg: "25vw" }}>
              <Sidebar />
            </Flex>
            <Flex
              w={{ base: "100vw", lg: "75vw" }}
              h="auto"
              justifyContent="center"
              alignContent="center"
              flexDir="column"
              position="relative"
            >
              {locale === "en-US" ? (
                <Button
                  as={motion.button}
                  initial={{ x: 100 }}
                  animate={{
                    x: 0,
                    transition: { duration: 0.9, ease: "easeIn", delay: 1.5 },
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
                  initial={{ x: 100 }}
                  animate={{
                    x: 0,
                    transition: { duration: 0.9, ease: "easeIn", delay: 1.5 },
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
          </>
        )}
      </Flex>
    </>
  );
};

export default Home;
