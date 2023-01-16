import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import Button from "../components/Button";
import TechsIcon from "../components/TechsIcon";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import ChakraNextImage from "../components/ChakraNextImage";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  firstHeading,
  secondHeading,
  thirdHeading,
  mainHeading1,
  mainHeading2,
  mainHeading3,
  mobileHeading1,
  mobileHeading2,
  mobileHeading3,
} from "../utils/animationsVariants";
import DesktopMain from "../components/DesktopMain";
import MobileMain from "../components/MobileMain";

const Main = () => {
  const { locale } = useRouter();
  const theme = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    delay: 200,
  });
  // const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, delay: 200 });

  return (
    <>
      <DesktopMain />
      <MobileMain />
    </>
  );
};

export default Main;
