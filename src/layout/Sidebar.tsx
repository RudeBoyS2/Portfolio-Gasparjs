import React, { useState } from "react";
import {
  Grid,
  Box,
  Flex,
  Image,
  Text,
  useTheme,
  Icon,
  Link,
  useDisclosure,
  Button,
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
import NextLink from "next/link";

const Sidebar = () => {
  const { locale } = useRouter();
  const { getButtonProps, getDisclosureProps, isOpen } = useDisclosure();
  const [hidden, setHidden] = useState(!isOpen);
  const [nav, setNav] = useState();
  const theme = useTheme();

  return (
    <>
      {/* MOBILE START */}
      <Box position="fixed" zIndex="100" h="-webkit-fill-available">
        <Button
          {...getButtonProps()}
          px="3"
          mt="1"
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ border: "none" }}
          aria-label="open menu"
          display={{ base: "inline", lg: "none" }}
          position="absolute"
          zIndex="10"
          color={isOpen ? "secondary" : "primary"}
        >
          {!isOpen ? (
            <HamburgerIcon
              w={{ base: "30px", sm: "20px" }}
              h={{ base: "30px", sm: "20px" }}
            />
          ) : (
            <CloseIcon
              w={{ base: "30px", sm: "20px" }}
              h={{ base: "30px", sm: "20px" }}
            />
          )}
        </Button>
        <Button
          position="absolute"
          right="0"
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ border: "none" }}
          aria-label="switch language button"
          color="secondary"
          fontSize="xl"
        >
          <NextLink
            href={locale === "en-US" ? "/" : "/en-US"}
            locale={locale === "en-US" ? "es-AR" : "en-US"}
          >
            {locale === "en-US" ? "EN" : "ES"}
          </NextLink>
        </Button>
        <Flex
          as={motion.div}
          {...getDisclosureProps()}
          hidden={hidden}
          initial={false}
          onAnimationStart={() => setHidden(false)}
          onAnimationComplete={() => setHidden(!isOpen)}
          animate={{ width: isOpen ? 300 : 0 }}
          display={{lg: "none"}}
          flexDirection="column"
          bg="primary"
          overflow="hidden"
          position="absolute"
          left="0"
          top="0"
          height="-webkit-fill-available"
        >
          <Grid h="20vh" justifyContent="center" alignContent="center">
            <Flex w="100%" p="3rem" justifyContent="space-between">
              <Box
                w={{ base: "70px", "2xl": "150px" }}
                h={{ base: "70px", "2xl": "150px" }}
              >
                <Image
                  src="https://res.cloudinary.com/dxgrn0qtx/image/upload/q_100/v1666072754/asdasd_lbeb9t.jpg"
                  w="100%"
                  h="100%"
                  rounded="5px"
                  fit="cover"
                  alt="my photo"
                />
              </Box>
              <Flex w="100%" ml="4" flexDir="column" justify="center">
                <Text
                  color="#dedede"
                  fontSize={{
                    base: "lg",
                    sm: "sm",
                    md: "lg",
                    lg: "16px",
                    xl: "xl",
                    "2xl": "3xl",
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
                  fontSize={{ base: "sm", lg: "12px", xl: "sm", "2xl": "xl" }}
                  fontFamily={theme.fonts.primary}
                  display={isOpen ? "block" : "none"}
                >
                  Fullstack Developer
                </Text>
              </Flex>
            </Flex>
          </Grid>
          <Grid>
            <NavItem
              icon={IoHome}
              name={
                locale === "en-US"
                  ? english.sidebar.first
                  : spanish.sidebar.first
              }
              path="/"
              setNav={setNav}
              nav={nav}
            />
            <NavItem
              icon={FaUserAlt}
              name={
                locale === "en-US"
                  ? english.sidebar.second
                  : spanish.sidebar.second
              }
              path="about"
              setNav={setNav}
              nav={nav}
            />
            <NavItem
              icon={BsFillBriefcaseFill}
              name={
                locale === "en-US"
                  ? english.sidebar.third
                  : spanish.sidebar.third
              }
              path="Projects"
              setNav={setNav}
              nav={nav}
            />
            <NavItem
              icon={AiFillMail}
              name={
                locale === "en-US"
                  ? english.sidebar.fourth
                  : spanish.sidebar.fourth
              }
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
      >
        <Button
          position="absolute"
          right="0"
          bg="none"
          _hover={{ bg: "none" }}
          _active={{ border: "none" }}
          aria-label="switch language button"
          color="secondary"
          fontSize="xl"
        >
          <NextLink
            href={locale === "en-US" ? "/" : "/en-US"}
            locale={locale === "en-US" ? "es-AR" : "en-US"}
          >
            {locale === "en-US" ? "EN" : "ES"}
          </NextLink>
        </Button>
        <Grid h="20vh" w="100%" justifyContent="center" alignContent="center">
          <Flex w="100%" p="3rem" justifyContent="space-between">
            <Box
              w={{ base: "70px", "2xl": "150px" }}
              h={{ base: "70px", "2xl": "150px" }}
            >
              <Image
                src="https://res.cloudinary.com/dxgrn0qtx/image/upload/q_100/v1666072754/asdasd_lbeb9t.jpg"
                w="100%"
                h="100%"
                rounded="5px"
                fit="cover"
                alt="my photo"
              />
            </Box>
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
                  "2xl": "3xl",
                }}
                fontFamily={theme.fonts.primary}
                _hover={{ color: "secondary" }}
                transition=".3s ease"
              >
                Gaspar Escobar
              </Text>
              <Text
                color="#737272"
                fontSize={{ base: "sm", lg: "12px", xl: "sm", "2xl": "xl" }}
                fontFamily={theme.fonts.primary}
              >
                Fullstack Developer
              </Text>
            </Flex>
          </Flex>
        </Grid>
        <Grid>
          <NavItem
            icon={IoHome}
            name="Inicio"
            path="/"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={FaUserAlt}
            name="Sobre mi"
            path="about"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={BsFillBriefcaseFill}
            name="Proyectos"
            path="Projects"
            setNav={setNav}
            nav={nav}
          />
          <NavItem
            icon={AiFillMail}
            name="Contacto"
            path="contact"
            setNav={setNav}
            nav={nav}
          />
        </Grid>

        <Grid h="15vh" mt="auto" justifyContent="center" alignContent="center">
          <Flex gap={{ base: "3rem", "2xl": "4rem" }}>
            <Link
              href="https://linkedin.com/in/gaspar-escobar"
              isExternal={true}
            >
              <Icon
                as={AiFillLinkedin}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "5xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
            <Link href="https://github.com/RudeBoyS2" isExternal={true}>
              <Icon
                as={AiFillGithub}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "5xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
            <Link href="https://walink.co/15a3f4" isExternal={true}>
              <Icon
                as={AiOutlineWhatsApp}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "5xl" }}
                _hover={{ fill: "secondary" }}
                transition="all .1s ease"
              />
            </Link>
            <Link href="mailto:gasp.ytsm@gmail.com" isExternal={true}>
              <Icon
                as={AiFillMail}
                fill="#737272"
                fontSize={{ base: "2xl", "2xl": "5xl" }}
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
