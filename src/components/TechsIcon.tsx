import { Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  src: string;
  alt: string;
  width?: string;
}

function TechsIcon({ src, alt, width }: Props) {
  return (
    <>
      <Image
        src={src}
        minW="30px"
        w={width}
        height={["30px", "30px", "30px", "30px", "30px", "50px"]}
        fit="cover"
        transition="all .1s ease"
        _hover={{ transform: "scale(1.1)" }}
        alt={alt}
      />
    </>
  );
}

export default TechsIcon;
