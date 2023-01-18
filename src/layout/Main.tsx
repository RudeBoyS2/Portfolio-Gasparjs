import { Box, Flex, Text, useTheme } from "@chakra-ui/react";
import Button from "../components/Button";
import TechsIcon from "../components/TechsIcon";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import DesktopMain from "../components/DesktopMain";
import MobileMain from "../components/MobileMain";

const Main = () => {
  return (
    <>
      <DesktopMain />
      <MobileMain />
    </>
  );
};

export default Main;
