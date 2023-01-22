import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

function Button({ content }: any) {
  const theme = useTheme();
  return (
    <>
      <Flex
        display={{ base: "none", sm: "flex" }}
        key="buttons"
        as={motion.div}
        initial={{ x: 2000, display: "none" }}
        animate={{
          x: 0,
          transition: { duration: 0.5, ease: "easeIn", delay: 1.1 },
          display: ""
        }}
        mb={{ lg: "4" }}
        h="64px"
        justify="center"
        w={{ base: "155px", sm: "180px", "2xl": "220px" }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition="0.2s linear"
        padding="1rem"
        border="1px solid #204b6a"
        _hover={{
          boxShadow: "10px 10px 0px 0px #204b6a",
        }}
      >
        <Text
          fontFamily={theme.fonts.secondary}
          fontSize={{ base: "md", sm: "xl", "2xl": "2xl" }}
          alignSelf="center"
          fontWeight="semibold"
        >
          {content}
        </Text>
      </Flex>

      {/* ------------------------MOBILE----------------------- */}
      <Flex
        display={{ base: "flex", sm: "none" }}
        key="buttons1"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.6, ease: "easeIn", delay: 3 },
        }}
        mb={{ lg: "4" }}
        h="64px"
        justify="center"
        w={{ base: "155px", sm: "180px", "2xl": "220px" }}
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition="0.2s linear"
        padding="1rem"
        border="1px solid #204b6a"
        _hover={{
          boxShadow: "10px 10px 0px 0px #204b6a",
        }}
      >
        <Text
          fontFamily={theme.fonts.secondary}
          fontSize={{ base: "md", sm: "xl", "2xl": "2xl" }}
          alignSelf="center"
          fontWeight="semibold"
        >
          {content}
        </Text>
      </Flex>
      {/* ------------------------MOBILE----------------------- */}
    </>
  );
}

export default Button;
