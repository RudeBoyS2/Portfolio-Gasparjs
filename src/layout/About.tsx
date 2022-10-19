import { Flex, Grid, Image, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import TabAbout from "../components/TabAbout";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";

function About() {
  const { locale } = useRouter()
  const theme = useTheme();
  
  return (
    <>
      <Grid
        height="100vh"
        position="relative"
        zIndex="5"
        justifyContent="center"
        gap="2rem"
        alignContent="center"
        bg="secondary"
        id="about"
        p="4rem"
        width="inherit"
      >
        <Text
          fontSize={{ base: "4xl", "2xl": "7xl" }}
          fontFamily={theme.fonts.secondary}
          textAlign="center"
          mt="8"
          mb={{ "2xl": "20" }}
        >
          {locale === "en-US" ? english.about.heading.first : spanish.about.heading.first}
        </Text>
        <Flex
          alignSelf="center"
          flexDir={["column", "column", "column", "column", "row"]}
          justifyContent="space-around"
          gap="2rem"
          width={{ "2xl": "75vw" }}
          mb={{ "2xl": "32" }}
        >
          <TabAbout />
          <Flex justifyContent="center" alignContent="center">
            <Image
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663859544/undraw_programming_re_kg9v_m1tcvj.svg"
              maxW={{ base: "334px", "2xl": "550px" }}
              maxH={{ base: "236px", "2xl": "550px" }}
              alignSelf="center"
              alt="programmer"
              display={{ base: "none", xl: "block" }}
            />
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default About;
