import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

function Button({ content }: any) {
  const theme = useTheme();
  return (
    <>
      <Flex
        // as={motion.button}
        display={{ base: "none", sm: "flex" }}
        key="buttons"
        as={motion.div}
        initial={{ x: 800, display: "none" }}
        animate={{
          x: 0,
          transition: { duration: 0.3, ease: "easeIn", delay: 10.5 },
          display: "flex"
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
        // as={motion.button}
        key="buttons1"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.5, ease: "easeIn", delay: 11.5 },
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
