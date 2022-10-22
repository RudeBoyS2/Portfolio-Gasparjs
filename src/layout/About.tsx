import { Flex, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import TabAbout from "../components/TabAbout";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import ChakraNextImage from "../components/ChakraNextImage";

function About() {
  const { locale } = useRouter();
  const theme = useTheme();

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
          fontSize={{ base: "4xl", lg: "3xl", "2xl": "7xl" }}
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
        >
          <TabAbout />
          <ChakraNextImage
            alignSelf="center"
            display={{ base: "none", xl: "block" }}
            w={{ base: "334px", "2xl": "550px" }}
            h={{ base: "236px", "2xl": "550px" }}
            src="https://res.cloudinary.com/diylksocz/image/upload/v1663859544/undraw_programming_re_kg9v_m1tcvj.svg"
          />
        </Flex>
      </Flex>
    </>
  );
}

export default About;
