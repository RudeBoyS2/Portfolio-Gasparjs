import {
  Flex,
  Grid,
  Text,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import type { Project } from "../utils/projectsMockES";
import ChakraNextImage from "./ChakraNextImage";

function ProjectsCard({
  title,
  description,
  src,
  briefDescription,
  type,
  stack,
  github,
  web,
}: Project) {
  const theme = useTheme();

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size="4xl">
        <ModalOverlay />
        <ModalContent m="auto" py="4">
          <ModalHeader pb="0">
            <Text
              color="secondary"
              textAlign="center"
              fontSize="4xl"
              fontFamily={theme.fonts.secondary}
            >
              {title}
            </Text>
          </ModalHeader>
          <ModalCloseButton _hover={{ bg: "none" }} />
          <ModalBody color="primary" display="flex" flexDir="row" gap={4}>
            <Flex flexDir="column" justify="space-around" gap="4">
              <Text
                fontSize="xl"
                fontWeight="bold"
                fontFamily={theme.fonts.primary}
              >
                {description}
              </Text>
              <Text fontSize="xl" fontFamily={theme.fonts.primary}>
                {`Stack: ${stack}`}
              </Text>
              <Flex align="center">
                {github && (
                  <>
                    <Link
                      href={github}
                      display="flex"
                      alignItems="center"
                      _hover={{ textDecoration: "none" }}
                      isExternal
                    >
                      <Icon
                        as={AiOutlineGithub}
                        fill="secondary"
                        fontSize="4xl"
                      />
                      <Text
                        mr="3"
                        fontSize={{ base: "sm", sm: "lg" }}
                        fontFamily={theme.fonts.primary}
                      >
                        : {github}
                      </Text>
                    </Link>
                  </>
                )}
              </Flex>
              <Flex align="center">
                {web && (
                  <>
                    <Link
                      href={web}
                      display="flex"
                      alignItems="center"
                      _hover={{ textDecoration: "none" }}
                      isExternal
                    >
                      <Icon
                        as={AiOutlineGlobal}
                        fill="secondary"
                        fontSize="4xl"
                      />
                      <Text
                        mr="3"
                        fontSize={{ base: "sm", sm: "lg" }}
                        fontFamily={theme.fonts.primary}
                      >
                        : {web}
                      </Text>
                    </Link>
                  </>
                )}
              </Flex>
            </Flex>
            <Flex
              minW="300px"
              h="300px"
              display={{ base: "none", md: "block" }}
            >
              <ChakraNextImage alt="project image" src={src} />
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid
        w={{
          base: "auto",
          sm: "300px",
          lg: "270px",
          xl: "290px",
          "2xl": "400px",
        }}
        h={{ base: "460px", lg: "430px", xl: "430px", "2xl": "500px" }}
        boxShadow="xl"
        margin="auto"
        mb={{ "2xl": "20" }}
      >
        <Flex
          cursor="pointer"
          onClick={onOpen}
          _hover={{ transform: "scale(1.05)", transition: "ease 0.3s" }}
          bg="#fff"
          flexDir="column"
          rounded="xl"
        >
          <ChakraNextImage
            src={src}
            w={{ base: "auto", sm: "300px", "2xl": "400px" }}
            h={{ base: "170px", xl: "200px" }}
            alt={title}
          />
          <Flex p="0.5rem" gap="0.5rem" flexDir="column">
            <Text
              fontFamily={theme.fonts.secondary}
              textAlign="center"
              fontSize="2xl"
              color="#505050"
              mt="2"
            >
              {title}
            </Text>
            <Text
              fontSize="xl"
              textAlign="center"
              fontFamily={theme.fonts.primary}
              color="#707070"
            >
              {type}
            </Text>
            <Text
              textAlign="center"
              fontFamily={theme.fonts.primary}
              color="#505050"
              fontSize="lg"
            >
              {briefDescription}
            </Text>
          </Flex>
        </Flex>
      </Grid>
    </>
  );
}

export default ProjectsCard;
