import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Console = () => {

  return (
    <>
      <Flex
        display={{ base: "none", sm: "flex" }}
        h="100%"
        w="100%"
        position="relative"
        align="center"
        justify="center"
        key="console"
        as={motion.div}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeIn", delay: 0.7 } }}
        exit={{ opacity: 0.5, y: "100%", transition: { duration: 0.5, ease: "easeOut" } }}
      >
        <video
          autoPlay
          muted
          playsInline
          style={{
            objectFit: "cover",
            height: "382px",
            width: "366px",
          }}
        >
          <source src="/assets/video1.mp4" type="video/mp4" />
        </video>
      </Flex>

      {/* Mobile */}
      <Flex
        display={{ base: "flex", sm: "none" }}
        h="100vh"
        w="100vw"
        position="relative"
        align="center"
        justify="center"
        key="consolemobile"
        as={motion.div}
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1, transition: { duration: 0.5, ease: "easeIn" } }}
        exit={{ opacity: 0, y: "100%", transition: { duration: 0.5, ease: "easeOut" } }}
      >
        <video
          autoPlay
          muted
          playsInline
          style={{
            objectFit: "cover",
            height: "384px",
            width: "240px"
          }}
        >
          <source src="/assets/video2.mp4" type="video/mp4" />
        </video>
      </Flex>
      </>
  );
};

export default Console;
