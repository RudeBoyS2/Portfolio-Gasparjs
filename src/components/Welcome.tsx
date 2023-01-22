import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Console from "./Console";

const Welcome = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 8200);
  });

  return (
    <AnimatePresence>
      {isLoading && (
        <Box
          h="100vh"
          w="100vw"
          zIndex="10"
          display="block"
          key="consolediv"
        >
          <Console />
        </Box>
      )}
    </AnimatePresence>
  );
};

export default Welcome;
