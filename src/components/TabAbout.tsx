import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Box,
  useTheme,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import { AttachmentIcon } from "@chakra-ui/icons";
import React from "react";
import { useRouter } from "next/router";
import english from "../translations/en/en.json";
import spanish from "../translations/es/es.json";

function TabAbout() {
  const { locale } = useRouter();
  const theme = useTheme();

  return (
    <>
      <Flex justifyContent="center" h={{ "360px": "700px", base: "550px", sm: "550px" }}>
        <Tabs w={{ base: "100vw", sm: "450px", "2xl": "600px" }} minH="540px" size="lg">
          <TabList
            fontFamily={theme.fonts.secondary}
            justifyContent="space-around"
          >
            <Tab
              p="0"
              fontSize={["lg", "lg", "lg", "md", "lg", "2xl"]}
              fontFamily={theme.fonts.secondary}
              fontWeight="bold"
              _selected={{ color: "tertiary" }}
              _active={{ bg: "none" }}
            >
              {locale === "en-US"
                ? english.about.heading.second
                : spanish.about.heading.second}
            </Tab>
            <Tab
              p="0"
              fontSize={["lg", "lg", "lg", "md", "lg", "2xl"]}
              fontFamily={theme.fonts.secondary}
              fontWeight="bold"
              _selected={{ color: "tertiary" }}
              _active={{ bg: "none" }}
            >
              {locale === "en-US"
                ? english.about.heading.third
                : spanish.about.heading.third}
            </Tab>
            <Tab
              p="0"
              fontSize={["lg", "lg", "lg", "md", "lg", "2xl"]}
              fontFamily={theme.fonts.secondary}
              fontWeight="bold"
              _selected={{ color: "tertiary" }}
              _active={{ bg: "none" }}
            >
              {locale === "en-US"
                ? english.about.heading.fourth
                : spanish.about.heading.fourth}
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex flexWrap="wrap">
                <Text
                  color="primary"
                  fontSize={{ base: "xl", md: "2xl", lg: "xl", "2xl": "2xl" }}
                  fontWeight="bold"
                  fontFamily={theme.fonts.secondary}
                  mt="1rem"
                >
                  Gaspar Escobar{" | "}Fullstack Developer
                </Text>
              </Flex>
                <Text
                  maxW="500px"
                  color="primary"
                  fontWeight="semibold"
                  fontFamily={theme.fonts.secondary}
                  mt="1rem"
                  fontSize={{ base: "md", "2xl": "xl" }}
                  lineHeight={{ base: "2rem", xl: "2rem", "2xl": "2.3rem" }}
                >
                  {locale === "en-US"
                    ? english.about.about.first
                    : spanish.about.about.first}
                  <br />
                  {locale === "en-US"
                    ? english.about.about.second
                    : spanish.about.about.second}
                  <br />
                  {locale === "en-US"
                    ? english.about.about.third
                    : spanish.about.about.third}
                </Text>
            </TabPanel>
            <TabPanel>
              <Text
                maxW="500px"
                color="primary"
                fontWeight="bold"
                fontFamily={theme.fonts.secondary}
                fontSize={{ base: "md", xl: "lg", "2xl": "xl" }}
                mt="1rem"
              >
                {locale === "en-US"
                  ? english.about.skills.first
                  : spanish.about.skills.first}
              </Text>
              <Text
                maxW="500px"
                color="primary"
                fontWeight="semibold"
                fontFamily={theme.fonts.secondary}
                fontSize={{ base: "md", xl: "md", "2xl": "xl" }}
                mt="1rem"
              >
                • Frontend: ReactJS, NextJS, TypeScript, Redux & RTK Query,
                ChakraUI, Bootstrap, Formik & Yup, framer-motion, y otros.
              </Text>
              <Text
                maxW="500px"
                color="primary"
                fontWeight="semibold"
                fontFamily={theme.fonts.secondary}
                fontSize={{ base: "md", xl: "md", "2xl": "xl" }}
                mt="1rem"
              >
                • Backend: NodeJS, Express, Mongoose, Jest, Prisma, y otros.
              </Text>
              <Text
                maxW="500px"
                color="primary"
                fontWeight="semibold"
                fontFamily={theme.fonts.secondary}
                fontSize={{ base: "md", xl: "md", "2xl": "xl" }}
                mt="1rem"
              >
                • Databases: MongoDB, MySQL, PostgreSQL.
              </Text>
              <Text
                maxW="500px"
                color="primary"
                fontWeight="semibold"
                fontFamily={theme.fonts.secondary}
                fontSize={{ base: "md", xl: "md", "2xl": "xl" }}
                mt="1rem"
              >
                • Other technologies: Git, GitHub, Trello, Postman, Jira.
              </Text>
            </TabPanel>
            <TabPanel>
              <Box fontFamily={theme.fonts.secondary} w="100%">
                <UnorderedList spacing={3}>
                  <ListItem>
                    <Text
                      fontSize={{ base: "lg", "2xl": "xl" }}
                      color="primary"
                      fontFamily="secondary"
                      fontWeight="bold"
                      mt="1rem"
                    >
                      Job Ready
                    </Text>
                    <Flex align="center" gap="3">
                      <Text
                        color="primary"
                        fontFamily="secondary"
                        fontWeight="thin"
                        fontSize={{ "2xl": "lg" }}
                      >
                        - Alkemy
                      </Text>
                      <a
                        href="https://www.dropbox.com/s/pycm5hcmhcri0gf/alkemyjobready.jpg?dl=0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AttachmentIcon
                          _hover={{ color: "tertiary" }}
                          transition="all .2s ease"
                        />
                      </a>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Text
                      fontSize={{ base: "lg", "2xl": "xl" }}
                      color="primary"
                      fontFamily="secondary"
                      fontWeight="bold"
                      mt="1rem"
                    >
                      Front-end Engineer
                    </Text>
                    <Flex align="center" gap="3">
                      <Text
                        color="primary"
                        fontFamily="secondary"
                        fontWeight="thin"
                        fontSize={{ "2xl": "lg" }}
                      >
                        - Codecademy
                      </Text>
                      <a
                        href=""
                        target="_blank"
                        rel="noreferrer"
                      >
                      </a>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Text
                      fontSize={{ base: "lg", "2xl": "xl" }}
                      fontFamily="secondary"
                      color="primary"
                      fontWeight="bold"
                      mt="1rem"
                    >
                      EF SET English Certificate (C 2)
                    </Text>
                    <Flex align="center" gap="3">
                      <Text
                        color="primary"
                        fontFamily="secondary"
                        fontWeight="thin"
                        fontSize={{ "2xl": "lg" }}
                      >
                        - EF SET
                      </Text>
                      <a
                        href="https://www.dropbox.com/s/axt0rmyz9ve1807/EF%20SET%20Certificate.pdf?dl=0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AttachmentIcon
                          _hover={{ color: "tertiary" }}
                          transition="all .2s ease"
                        />
                      </a>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Text
                      fontSize={{ base: "lg", "2xl": "xl" }}
                      color="primary"
                      fontWeight="bold"
                      fontFamily="secondary"
                      mt="1rem"
                    >
                      Sé Programar
                    </Text>
                    <Flex align="center" gap="3">
                      <Text
                        color="primary"
                        fontFamily="secondary"
                        fontWeight="thin"
                        fontSize={{ "2xl": "lg" }}
                      >
                        - Argentina Programa
                      </Text>
                      <a
                        href="https://www.dropbox.com/s/j223csmv6sjyjye/se%20programar%20argentina%20programa.pdf?dl=0"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <AttachmentIcon
                          _hover={{ color: "tertiary" }}
                          transition="all .2s ease"
                        />
                      </a>
                    </Flex>
                  </ListItem>
                  <ListItem>
                    <Text
                      fontSize={{ base: "lg", "2xl": "xl" }}
                      color="primary"
                      fontWeight="bold"
                      mt="1rem"
                      fontFamily="secondary"
                    >
                      Inglés Adolescente
                    </Text>
                    <Text
                      color="primary"
                      fontFamily="secondary"
                      fontWeight="thin"
                      fontSize={{ "2xl": "lg" }}
                    >
                      - Josefina Contte (2012 - 2017)
                    </Text>
                  </ListItem>
                </UnorderedList>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </>
  );
}

export default TabAbout;
