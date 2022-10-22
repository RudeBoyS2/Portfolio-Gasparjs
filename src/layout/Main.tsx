import {
  Flex,
  Text,
  useTheme,
} from "@chakra-ui/react";
import Button from "../components/Button";
import TechsIcon from "../components/TechsIcon";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import ChakraNextImage from "../components/ChakraNextImage";

const Main = () => {
  const { locale } = useRouter();
  const theme = useTheme();

  return (
    <>
      <Flex
        minH="100vh"
        maxH={{ "2xl": "100vh" }}
        w={{ base: "100vw", sm: "auto" }}
        position="relative"
        zIndex="5"
        id="/"
        flexDir="column"
        alignContent="center"
        justifyContent={{ base: "center", xl: "space-evenly" }}
        backdropFilter="blur(1px)"
      >
        <Flex
          justifyContent="center"
          alignContent="center"
          flexDir={["column", "column", "row", "row", "row", "row"]}
          gap={{ base: "0", sm: "4rem", "2xl": "1rem" }}
          h={{ sm: "350px" }}
          w="100%"
          mt={{ "2xl": "14" }}
        >
          <Flex flexDir="column" alignSelf="center" minW="50%" ml={{ lg: "6" }}>
            <Text
              fontSize={{
                base: "34px",
                sm: "4xl",
                md: "3xl",
                lg: "3xl",
                xl: "4xl",
                "2xl": "5xl",
              }}
              fontFamily={theme.fonts.primary}
              position="relative"
              alignSelf="center"
              color="#202020"
            >
              {locale === "en-US"
                ? english.main.heading.first
                : spanish.main.heading.first}
            </Text>
            <Text
              fontSize={{
                base: "44px",
                sm: "5xl",
                md: "38px",
                lg: "4xl",
                xl: "5xl",
                "2xl": "7xl",
              }}
              fontFamily={theme.fonts.secondary}
              color="secondary"
              textAlign="center"
            >
              Gaspar Escobar
            </Text>
            <Flex
              justify="center"
              align="baseline"
              fontFamily="primary"
              fontSize={{
                base: "34px",
                sm: "4xl",
                md: "3xl",
                lg: "3xl",
                xl: "4xl",
                "2xl": "5xl",
              }}
            >
              <Typewriter
                options={{
                  wrapperClassName: "Typewriter__wrapper",
                  strings: ["Fullstack", "Front-end", "React"],
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Fullstack")
                    .pauseFor(2000)
                    .deleteAll()
                    .start();
                }}
              />
              <Text fontFamily={theme.fonts.primary} position="relative">
                Developer
              </Text>
            </Flex>
          </Flex>
          <ChakraNextImage
            alignSelf="center"
            alt="Gaspar Escobar"
            src="/assets/programmer.png"
            fit="cover"
            h={{ base: "300px", sm: "350px" }}
            w={{ base: "300px", sm: "350px", "2xl": "600px" }}
            position="relative"
            display={{ base: "block", sm: "none", md: "block" }}
          />
        </Flex>

        <Flex justifyContent="center" gap="2rem" alignSelf="center">
          <a
            href="https://www.dropbox.com/s/v3wcee6qgxpmtwj/Gaspar%20Escobar%20-%20Frontend%20ReactJS%20%26%20NextJS%20Developer%20-%20CV.pdf?dl=1"
            download
            target="_blank"
            rel="noreferrer"
          >
            <Button
              w="175px"
              content={
                locale === "en-US"
                  ? english.main.button.first
                  : spanish.main.button.first
              }
            />
          </a>
          <Link to="contact" spy={true}>
            <Button
              content={
                locale === "en-US"
                  ? english.main.button.second
                  : spanish.main.button.second
              }
            />
          </Link>
        </Flex>
        <Flex
          w="100%"
          mt="10"
          justifyContent="space-around"
          // mb={{ base: "3rem", lg: "6rem", xl: "3rem", "2xl": "auto" }}
          flexDir="column"
          gap="2rem"
          // mt={{ base: "auto", lg: "10", xl: "auto", "2xl": "auto" }}
          p="1rem"
        >
          <Flex
            justifyContent="center"
            gap={{ base: "1rem", md: "3rem" }}
            flexWrap="wrap"
          >
            <TechsIcon
              src='/assets/html.png'
              alt="html logo"
              width="30px"
            />
            <TechsIcon
              src='/assets/css.png'
              alt="css logo"
              width="30px"
            />
            <TechsIcon
              src='/assets/js.png'
              alt="javascript logo"
              width="30px"
            />
            <TechsIcon
              src='/assets/ts.png'
              alt="typescript logo"
              width="30px"
            />
            <TechsIcon
              src='/assets/react.png'
              alt="react logo"
              width="35px"
            />
            <TechsIcon
              src='/assets/next.png'
              alt="next logo"
              width="49px"
            />
            <TechsIcon
              src='/assets/redux.png'
              alt="redux logo"
              width="32px"
            />
            <TechsIcon
              src='/assets/chakra.png'
              alt="chakra logo"
              width="none"
            />
          </Flex>

          <Flex
            justifyContent="center"
            gap={{ base: "2rem", "2xl": "4rem" }}
            flexWrap="wrap"
          >
            <TechsIcon
              src='/assets/node.png'
              alt="node logo"
              width="49px"
            />
            <TechsIcon
              src='/assets/express.png'
              alt="express logo"
              width="99px"
            />
            <TechsIcon
              src='/assets/mongo.png'
              alt="mongo logo"
              width="111px"
            />
            <TechsIcon
              src='/assets/mysql.png'
              alt="mysql logo"
              width="58px"
            />
            <TechsIcon
              src='/assets/mongoose1.png'
              alt="mongoose logo"
              width="80px"
            />
            <TechsIcon
              src='/assets/prisma.png'
              alt="prisma logo"
              width="97px"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
