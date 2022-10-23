import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Input,
  Text,
  Textarea,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub, AiFillMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import React, { FormEventHandler, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";
import {useInView} from "react-intersection-observer";
import { motion } from "framer-motion";
import { firstHeading, secondHeading } from "../utils/animationsVariants";

function Contact() {
  const { locale } = useRouter();
  const [button, setButton] = useState(false);
  const {ref, inView} = useInView({triggerOnce: true, delay: 200});  

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setButton(true);
    console.log("hola")
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICE_KEY}`,
        "template_i039ffz",
        `#contact_form`,
        `${process.env.NEXT_PUBLIC_API_KEY}`
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          console.log(res);
          toast({
            title: "Enviado exitosamente!",
            status: "success",
            duration: 9000,
            isClosable: true,
          });
        }
      })
      .catch((res) => console.log(res));
  };

  const theme = useTheme();
  const toast = useToast();
  return (
    <>
      <Flex
        minH="100vh"
        maxH={{"2xl": "100vh"}}
        position="relative"
        zIndex="10"
        justify="center"
        align="center"
        bg="secondary"
        id="contact"
        flexDir={{ base: "column", xl: "row" }}
        py="4rem"
      >
        <Flex
          gap="5rem"
          flexWrap={{ base: "wrap", lg: "nowrap" }}
          justify="center"
          height="fit-content"
        >
          <Flex
            w={{ base: "350px", sm: "400px", xl: "400px", "2xl": "400px" }}
            flexDir="column"
            p="2rem"
            fontFamily={theme.fonts.primary}
            gap="4rem"
            rounded="20px"
            boxShadow="1px 1px 10px 1px #606060"
            justifyContent="center"
            maxH="auto"
            bg="#fff"
            animate={inView ? "visible" : ""}
            as={motion.div}
            initial="hidden"
            ref={ref}
            variants={firstHeading}
          >
            <Text
              alignSelf="center"
              fontSize={{
                base: "2xl",
                sm: "3xl",
                md: "2xl",
                lg: "2xl",
                xl: "3xl",
                "2xl": "4xl",
              }}
              fontFamily={theme.fonts.secondary}
            >
              {locale === "en-US"
                ? english.contact.heading.first
                : spanish.contact.heading.first}
            </Text>
            <Flex gap="1rem">
              <Icon
                as={BsLinkedin}
                fontSize={{ base: "3xl", sm: "2xl", md: "4xl", "2xl": "5xl" }}
              />
              <Text
                alignSelf="center"
                fontSize={{ base: "md", xl: "lg", "2xl": "18px" }}
                fontFamily={theme.fonts.primary}
              >
                linkedin.com/in/gaspar-escobar/
              </Text>
            </Flex>
            <Flex gap="1rem">
              <Icon
                as={AiOutlineGithub}
                fontSize={{ base: "3xl", sm: "2xl", md: "4xl", "2xl": "5xl" }}
              />
              <Text
                alignSelf="center"
                fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}
                fontFamily={theme.fonts.primary}
              >
                github.com/RudeBoyS2
              </Text>
            </Flex>
            <Flex gap="1rem">
              <Icon
                as={AiFillMail}
                fontSize={{ base: "3xl", sm: "2xl", md: "4xl", "2xl": "5xl" }}
              />
              <Text
                alignSelf="center"
                fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}
                fontFamily={theme.fonts.primary}
              >
                gasp.ytsm@gmail.com
              </Text>
            </Flex>
            <Flex gap="1rem" mb="auto">
              <Icon
                as={IoLogoWhatsapp}
                fontSize={{ base: "3xl", sm: "2xl", md: "4xl", "2xl": "5xl" }}
              />
              <Text
                alignSelf="center"
                fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}
                fontFamily={theme.fonts.primary}
              >
                +54 3794 397311
              </Text>
            </Flex>
          </Flex>
          <Flex
            maxH="auto"
            w={{ base: "350px", sm: "400px", xl: "400px", "2xl": "400px" }}
            flexDir="column"
            p="2rem"
            fontFamily={theme.fonts.primary}
            gap="1.5rem"
            rounded="20px"
            boxShadow="1px 1px 10px 1px #606060"
            bg="#fff"
            animate={inView ? "visible" : ""}
            as={motion.div}
            initial="hidden"
            variants={secondHeading}
          >
            <Text
              fontSize={{
                base: "2xl",
                sm: "3xl",
                md: "2xl",
                lg: "2xl",
                xl: "3xl",
                "2xl": "4xl",
              }}
              fontFamily={theme.fonts.secondary}
              alignSelf="center"
            >
              {locale === "en-US"
                ? english.contact.heading.second
                : spanish.contact.heading.second}
            </Text>
            <form onSubmit={handleSubmit} id="contact_form">
              <FormControl id="name">
                <FormLabel  fontSize={{ base: "lg", "2xl": "2xl" }} mt="2">
                  {locale === "en-US"
                    ? english.contact.input.first
                    : spanish.contact.input.first}
                </FormLabel>
                <Input
                  type="text"
                  name="from_name"
                  size={{ base: "md", "2xl": "md" }}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel fontSize={{ base: "lg", "2xl": "2xl" }} mt="2">
                  {locale === "en-US"
                    ? english.contact.input.second
                    : spanish.contact.input.second}
                </FormLabel>
                <Input
                  type="email"
                  name="from_email"
                  size={{ base: "md", "2xl": "md" }}
                />
              </FormControl>
              <FormControl id="message">
                <FormLabel fontSize={{ base: "lg", "2xl": "2xl" }} mt="2">
                  {locale === "en-US"
                    ? english.contact.input.third
                    : spanish.contact.input.third}
                </FormLabel>
                <Textarea
                  name="message"
                  id=""
                  size={{ base: "md", "2xl": "md" }}
                  resize="none"
                />
              </FormControl>
              <Button
                type="submit"
                width="100%"
                mt="3rem"
                disabled={button}
                bg="secondary"
                color="primary"
                _hover={{
                  bg: "tertiary",
                  color: "secondary",
                  border: "1px solid #495dee",
                }}
                // onClick={() => setButton(true)}
                size={{ base: "md", "2xl": "lg" }}
              >
                {locale === "en-US" ? "Send" : "Enviar"}
              </Button>
            </form>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Contact;
