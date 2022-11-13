import { Box, Grid, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import ProjectsCard from "../components/ProjectsCard";
import { projectsMockES } from "../utils/projectsMockES";
import { projectsMockEN } from "../utils/projectsMockEN";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { firstHeading } from "../utils/animationsVariants";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1300 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1300, min: 810 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 810, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function Projects() {
  const { locale } = useRouter();
  const theme = useTheme();
  const { ref, inView } = useInView({ triggerOnce: true, delay: 200 });

  return (
    <>
      <Grid
        minH="100vh"
        maxH={{ "2xl": "100vh" }}
        position="relative"
        zIndex="10"
        alignContent="center"
        id="Projects"
        backdropFilter="blur(1px)"
        animate={inView ? "visible" : ""}
            as={motion.div}
            initial="hidden"
            variants={firstHeading}
            ref={ref}
      >
        <Box p="2rem" mt={{ base: "0", sm: "0", "2xl": "28" }}>
          <Text
            mb={{"2xl": "2rem"}}
            fontSize={{
              base: "4xl",
              sm: "4xl",
              md: "4xl",
              lg: "3xl",
              xl: "4xl",
              "2xl": "5xl",
            }}
            fontFamily={theme.fonts.secondary}
            textAlign="center"
          >
            {locale === "en-US"
              ? english.projects.heading.first
              : spanish.projects.heading.first}
          </Text>
          <Text
            fontSize={{
              base: "xl",
              sm: "md",
              md: "xl",
              lg: "lg",
              xl: "xl",
              "2xl": "2xl",
            }}
            fontFamily={theme.fonts.primary}
            color="#505050"
            textAlign="center"
            px="2rem"
          >
            {locale === "en-US"
              ? english.projects.heading.second
              : spanish.projects.heading.second}
          </Text>
        </Box>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className="carousel"
          containerClass="carousel-container"
          draggable
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass="carousel-slider"
          slidesToSlide={1}
          swipeable
          itemClass="carousel-item"
        >
          {Object.values(
            locale === "en-US" ? projectsMockEN : projectsMockES
          ).map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              src={project.src}
              briefDescription={project.briefDescription}
              type={project.type}
              stack={project.stack}
              github={project.github}
              web={project.web}
            />
          ))}
        </Carousel>
      </Grid>
    </>
  );
}

export default Projects;
