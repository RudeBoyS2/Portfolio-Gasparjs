import { Box } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Console from "./Console";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  })
  // const { ref, inView } = useInView({ triggerOnce: true, delay: 200, initialInView: true });

  // const asd = {
  //   hidden: {
  //     display: "none",
      
  //   },
  //   visible: {
  //     display: "block",
  //     transition: {
  //       duration: 3,
  //       delay: 3,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <Box
      // as={motion.div}
      // animate={{display: "none", transition: {duration: 5.2}}}
      // ref={ref}
      // @ts-ignore
      // initial={{display: "block", transition: {duration: 5.2}}}
      // variants={asd}      
      h="100vh"
      w="100vw"      
      zIndex="1"
      // display={isLoading ? "block" : "none"}
      display="none"
    >
      <Console />
    </Box>
  );
};

export default Welcome;
