import React from "react";
import ChakraNextImage from "./ChakraNextImage";

type Props = {
  src: string;
  alt: string;
  width?: string;
};

function TechsIcon({ src, alt, width }: Props) {
  return (
    <>
      <ChakraNextImage
        src={src}
        minW={{ base: "30px", "2xl": "35px" }}
        priority="yes"
        w={width}
        height={{ base: "30px", "2xl": "35px" }}
        transition="all .1s ease"
        _hover={{ transform: "scale(1.1)" }}
        alt={alt}
      />
    </>
  );
}

export default TechsIcon;
