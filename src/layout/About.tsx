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
        // maxH={{ "2xl": "100vh" }}
        position="relative"
        zIndex="5"
        // gap={{ base: "2rem", lg: "6", xl: "1rem" }}
        align="center"
        // justify="center"
        justifyContent={{lg: "space-evenly", "2xl": "center"}}
        bg="secondary"
        id="about"
      >
        <Text
          animate={inView ? "visible" : ""}
          as={motion.h3}
          initial="hidden"
          variants={firstHeading}
          fontSize={{ base: "4xl", lg: "3xl", xl: "4xl", "2xl": "5xl" }}
          fontFamily={theme.fonts.secondary}
          fontWeight="extrabold"
          textAlign="center"
          mt={{base: "10", xl: "8", "2xl": "24"}}
          mb={{ lg: "2rem" }}
        >
          {locale === "en-US"
            ? english.about.heading.first
            : spanish.about.heading.first}
        </Text>
        <Flex
          alignSelf="center"
          flexDir={{ base: "column", xl: "row" }}
          align="center"
          justifyContent="space-evenly"
          gap="5rem"
          mt={{base: "3rem", sm: "0"}}
          width={{ "2xl": "75vw" }}
          mb={{ "2xl": "32" }}
          animate={inView ? "visible" : ""}
          ref={ref}
          as={motion.div}
          initial="hidden"
          variants={secondHeading}
        >
          <TabAbout />
          <ChakraNextImage
            alignSelf="center"
            display={{ base: "none", xl: "block" }}
            w={{ base: "334px", "2xl": "360px" }}
            h={{ base: "236px", "2xl": "360px" }}
            src="/assets/programmer2.png"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default About;
