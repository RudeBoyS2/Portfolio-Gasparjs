import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import TabAbout from "../components/TabAbout";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import ChakraNextImage from "../components/ChakraNextImage";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  firstHeading,
  secondHeading,
} from "../utils/animationsVariants";

function About() {
  const { locale } = useRouter();
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, delay: 200 });

  return (
    <>
      <Flex
        flexDir="column"
        width="100%"
        minH="100vh"
        maxH={{ "2xl": "100vh" }}
        position="relative"
        zIndex="5"
        gap={{ base: "2rem", lg: "6", xl: "2rem" }}
        alignContent="center"
        justifyContent="space-evenly"
        bg="secondary"
        id="about"
      >
        <Text
          animate={inView ? "visible" : ""}
          as={motion.h3}
          initial="hidden"
          variants={firstHeading}
          fontSize={{ base: "4xl", lg: "3xl", "2xl": "5xl" }}
          fontFamily={theme.fonts.secondary}
          textAlign="center"
          mt="10"
          mb={{ "2xl": "20" }}
        >
          {locale === "en-US"
            ? english.about.heading.first
            : spanish.about.heading.first}
        </Text>
        <Flex
          alignSelf="center"
          flexDir={{ base: "column", xl: "row" }}
          justifyContent="space-around"
          gap="5rem"
          width={{ "2xl": "75vw" }}
          mb={{ "2xl": "32" }}
          h={{ lg: "75vh" }}
          animate={inView ? "visible" : ""}
          as={motion.div}
          initial="hidden"
          ref={ref}
          variants={secondHeading}
        >
          <TabAbout />
          <ChakraNextImage
            alignSelf="center"
            display={{ base: "none", xl: "block" }}
            w={{ base: "334px", "2xl": "380px" }}
            h={{ base: "236px", "2xl": "380px" }}
            src="/assets/programmer2.png"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default About;
