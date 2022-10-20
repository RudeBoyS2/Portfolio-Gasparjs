import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  useTheme,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
  Icon,
} from "@chakra-ui/react";
import { AiOutlineGithub, AiOutlineGlobal } from "react-icons/ai";
import type { Project } from "../utils/projectsMockES";

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
      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent my="auto">
          <ModalHeader>
            <Text color="secondary" fontSize="4xl" fontFamily={theme.fonts.secondary}>
              {title}
            </Text>
          </ModalHeader>
          <ModalCloseButton _hover={{ bg: "none" }} />
          <ModalBody color="primary" display="flex" flexDir="column" gap={4}>
            <Text fontSize="xl" fontFamily={theme.fonts.primary}>
              {description}
            </Text>
            <Text fontSize="xl" fontFamily={theme.fonts.primary}>
              {`Stack: ${stack}`}
            </Text>
            <Flex>
              {github && (
                <>
                  <Text mr="3" fontSize="xl" fontFamily={theme.fonts.primary}>
                    Repositorio:{" "}
                  </Text>
                  <Link href={github}>
                    <Icon as={AiOutlineGithub} fill="secondary" fontSize="4xl" />
                  </Link>
                </>
              )}
            </Flex>
            <Flex>
              {web && (
                <>
                  <Text mr="3" fontSize="xl" fontFamily={theme.fonts.primary}>
                    Web:{" "}
                  </Text>
                  <Link href={web}>
                    <Icon as={AiOutlineGlobal} fill="secondary" fontSize="4xl" />
                  </Link>
                </>
              )}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Grid
        w={{ sm: "300px", lg: "270px", xl: "300px", "2xl": "400px" }}
        h={{ sm: "450px", lg: "400px", xl: "450px", "2xl": "500px" }}
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
          <Image
            src={src}
            w={{ base: "300px", "2xl": "400px" }}
            h={{base: "170px", xl: "200px"}}
            objectFit="fill"
            alt={title}
          />
          <Flex p="0.5rem" gap="0.5rem" flexDir="column">
            
              <Text
                fontFamily={theme.fonts.secondary}
                textAlign="center"
                fontSize="2xl"
                color="#505050"
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
              fontSize="xl"
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
