import { Flex, Text, useTheme } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

function Button({content}: any) {
  const theme = useTheme();
  return (
    <>
      <Flex
        mb={{lg: "4"}}
        h="64px"
        justify="center"
        as={motion.button}
        w={{base: "155px", sm: "180px", "2xl": "220px"}}
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
          fontSize={{base: "md", sm: "xl", "2xl": "2xl"}}
          alignSelf="center"
        >
          {content}
        </Text>
      </Flex>
    </>
  );
}

export default Button;
