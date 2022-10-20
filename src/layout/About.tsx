import { Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import TabAbout from "../components/TabAbout";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";

function About() {
  const { locale } = useRouter();
  const theme = useTheme();

  return (
    <>
      <Flex
        flexDir="column"
        width="100%"
        height="100vh"
        position="relative"
        zIndex="5"
        justifyContent="center"
        gap={{ base: "2rem", lg: "6", xl: "2rem" }}
        alignContent="center"
        bg="secondary"
        id="about"
        // mt="8"
        // width="inherit"
      >
        <Text
          fontSize={{ base: "4xl", lg: "3xl", "2xl": "7xl" }}
          fontFamily={theme.fonts.secondary}
          textAlign="center"
          mb={{ "2xl": "20" }}
          py={{ base: 0, lg: "3rem", xl: 0 }}
          h="50px"
        >
          {locale === "en-US"
            ? english.about.heading.first
            : spanish.about.heading.first}
        </Text>
        <Flex
          alignSelf="center"
          flexDir={{ base: "column", xl: "row" }}
          justifyContent="space-around"
          gap="2rem"
          width={{ "2xl": "75vw" }}
          mb={{ "2xl": "32" }}
        >
          <TabAbout />
          <Flex
            display={{ base: "none", xl: "block" }}
            justifyContent="center"
            alignContent="center"
            alignSelf="center"
          >
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663859544/undraw_programming_re_kg9v_m1tcvj.svg"
              maxW={{ base: "334px", "2xl": "550px" }}
              maxH={{ base: "236px", "2xl": "550px" }}
              alt="programmer"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default About;
