import React, { useEffect, useState } from "react";
import {
  Grid,
  Box,
  Flex,
  Text,
  useTheme,
  Icon,
  Link,
  useDisclosure,
  Button,
  Divider,
} from "@chakra-ui/react";
import { IoHome } from "react-icons/io5";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiOutlineWhatsApp,
  AiFillMail,
} from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import NavItem from "../components/NavItem";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import ChakraNextImage from "../components/ChakraNextImage";

const Sidebar = () => {
  const { locale } = useRouter();
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  const [nav, setNav] = useState();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 17000);
  });

  const firstNavName =
    locale === "en-US" ? english.sidebar.first : spanish.sidebar.first;
  const secondNavName =
    locale === "en-US" ? english.sidebar.second : spanish.sidebar.second;
  const thirdNavName =
    locale === "en-US" ? english.sidebar.third : spanish.sidebar.third;
  const fourthNavName =
    locale === "en-US" ? english.sidebar.fourth : spanish.sidebar.fourth;

  return (
    <>
      {/* MOBILE START */}
      <Box position="fixed" zIndex="100" h="100vh">
        <Button
          {...getButtonProps()}
          px="3"
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ border: "none" }}
          aria-label="open menu"
          display={{ base: "block", lg: "none" }}
          position="absolute"
          zIndex="10"
          color={isOpen ? "secondary" : "primary"}
          as={motion.button} initial={{opacity: 0}} animate={{opacity: 1, transition: {duration: 1, delay: 10}}}
        >
          {!isOpen ? (
            <HamburgerIcon
              w={{ base: "22px", sm: "20px" }}
              h={{ base: "22px", sm: "20px" }}
            />
          ) : (
            <CloseIcon
              w={{ base: "22px", sm: "20px" }}
              h={{ base: "22px", sm: "20px" }}
            />
          )}
        </Button>
        <Flex
          as={motion.div}
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          onAnimationStart={() => setHidden(false)}
          onAnimationComplete={() => setHidden(!isOpen)}
          animate={{ width: isOpen ? 300 : 0 }}
          display={{ lg: "none" }}
          flexDirection="column"
          bg="primary"
          overflow="hidden"
          position="absolute"
          left="0"
          top="0"
          height="100vh"
        >
          <Grid h="20vh" justifyContent="center" alignContent="center">
            <Flex
              w="100%"
              p={{ base: "2.2rem", md: "2.4rem", lg: "1.5rem", xl: "2.4rem" }}
              justifyContent="space-between"
            >
              <ChakraNextImage
                src="/assets/profile.jpg"
                w="120px"
                h="70px"
                rounded="5px"
                alt="my photo"
              />
              <Flex w="100%" ml="4" flexDir="column" justify="center">
                <Text
                  color="#dedede"
                  fontSize={{
                    base: "lg",
                    sm: "sm",
                    md: "lg",
                    lg: "16px",
                    xl: "xl",
                    
                  }}
                  fontFamily={theme.fonts.primary}
                  _hover={{ color: "secondary" }}
                  transition=".3s ease"
                  display={isOpen ? "block" : "none"}
                >
                  Gaspar Escobar
                </Text>
                <Text
                  color="#737272"
                  fontSize={{ base: "sm", lg: "12px", xl: "sm"}}
                  fontFamily={theme.fonts.primary}
                  display={isOpen ? "block" : "none"}
                >
                  Fullstack Developer
                </Text>
              </Flex>
            </Flex>
          </Grid>
          <Divider borderColor="gray" opacity="0.1" />
          <Grid>
            <NavItem
              icon={IoHome}
              name={firstNavName}
              path="/"
              setNav={setNav}
              nav={nav}
            />
            <NavItem
              icon={FaUserAlt}
              name={secondNavName}
              path="about"
              setNav={setNav}
              nav={nav}
            />
            <NavItem
              icon={BsFillBriefcaseFill}
              name={thirdNavName}
              path="Projects"
              setNav={setNav}
              nav={nav}
            />
            <NavItem
              icon={AiFillMail}
              name={fourthNavName}
              path="contact"
              setNav={setNav}
              nav={nav}
            />
          </Grid>

          <Grid
            h="15vh"
            mt="auto"
            justifyContent="center"
            alignContent="center"
            position="absolute"
            left="0"
            bottom="0"
            right="0"
          >
            <Flex gap="3rem">
              <Link
                href="https://linkedin.com/in/gaspar-escobar"
                isExternal={true}
              >
                <Icon
                  as={AiFillLinkedin}
                  fill="#737272"
                  fontSize={{ base: "3xl", sm: "2xl" }}
                  _hover={{ fill: "secondary" }}
                  transition="all .1s ease"
                />
              </Link>
              <Link href="https://github.com/RudeBoyS2" isExternal={true}>
                <Icon
                  as={AiFillGithub}
                  fill="#737272"
                  fontSize={{ base: "3xl", sm: "2xl" }}
                  _hover={{ fill: "secondary" }}
                  transition="all .1s ease"
                />
              </Link>
              <Link href="https://walink.co/15a3f4" isExternal={true}>
                <Icon
                  as={AiOutlineWhatsApp}
                  fill="#737272"
                  fontSize={{ base: "3xl", sm: "2xl" }}
                  _hover={{ fill: "secondary" }}
                  transition="all .1s ease"
                />
              </Link>
              <Link href="mailto:gasp.ytsm@gmail.com" isExternal={true}>
                <Icon
                  as={AiFillMail}
                  fill="#737272"
                  fontSize={{ base: "3xl", sm: "2xl" }}
                  _hover={{ fill: "secondary" }}
                  transition="all .1s ease"
                />
              </Link>
            </Flex>
          </Grid>
        </Flex>
      </Box>
      {/* MOBILE END */}

      {/* DESKTOP */}
      <Flex
        w="25vw"
        minH="100vh"
        bg="primary"
        alignContent="space-between"
        flexDir="column"
        position="fixed"
        zIndex="10"
        display={{ base: "none", lg: "flex" }}
        as={motion.div}
        initial={{ x: -500, display: "none" }}
        animate={{
          x: 0,
          transition: { duration: 1, ease: "easeIn", delay: 10.5 },
          display: "flex"
        }}
      >
        <Grid h="20vh" w="100%" justifyContent="center" alignContent="center">
          <Flex
            w="100%"
            gap={2}
            p={{ lg: "2rem", xl: "2rem" }}
            justifyContent="center"
          >
            <ChakraNextImage
              src="https://res.cloudinary.com/dxgrn0qtx/image/upload/q_100/v1666072754/asdasd_lbeb9t.jpg"
              w={{base: "120px", "2xl": "140px"}}
              h={{base: "70px", "2xl": "90px"}}
              rounded="5px"
              alt="my photo"
            />

            <Flex
              w="100%"
              ml={{ base: "4", "2xl": "8" }}
              flexDir="column"
              justify="center"
            >
              <Text
                color="#dedede"
                fontSize={{
                  base: "sm",
                  md: "lg",
                  lg: "16px",
                  xl: "xl",
                  "2xl": "xl",
                }}
                fontWeight="bold"
                fontFamily={theme.fonts.primary}
                _hover={{ color: "secondary" }}
                transition=".3s ease"
              >
                Gaspar Escobar
              </Text>
              <Text
                color="#737272"
                fontSize={{ base: "sm", lg: "12px", xl: "md", "2xl": "lg" }}
                fontFamily={theme.fonts.primary}
              >
                Fullstack Developer
              </Text>
            </Flex>
          </Flex>
        </Grid>
        <Divider borderColor="gray" opacity="0.1" />
        <Grid>
          <NavItem
            icon={IoHome}
            name={firstNavName}
            path="/"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={FaUserAlt}
            name={secondNavName}
            path="about"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={BsFillBriefcaseFill}
            name={thirdNavName}
            path="Projects"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={AiFillMail}
            name={fourthNavName}
            path="contact"
            setNav={setNav}
            nav={nav}
          />
        </Grid>

        <Grid h="15vh" mt="auto" justifyContent="center" alignContent="center">
          <Flex gap={{ base: "3rem", "2xl": "4.5rem" }}>
            <Link
              href="https://linkedin.com/in/gaspar-escobar"
              isExternal={true}
            >
              <Icon
                as={AiFillLinkedin}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "3xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
            <Link href="https://github.com/RudeBoyS2" isExternal={true}>
              <Icon
                as={AiFillGithub}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "3xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
            <Link href="https://wa.me/543794397311" isExternal={true}>
              <Icon
                as={AiOutlineWhatsApp}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "3xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
            <Link href="mailto:gasp.ytsm@gmail.com" isExternal={true}>
              <Icon
                as={AiFillMail}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "3xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
          </Flex>
        </Grid>
      </Flex>
      {/* DESKTOP END */}
    </>
  );
};

export default Sidebar;
