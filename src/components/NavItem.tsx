import React from "react";
import {
  Flex,
  Icon,
  Text,
  useTheme,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { Link } from "react-scroll";
import { IconType } from "react-icons";
interface Props {
  icon: IconType;
  name: string;
  path: string;
  setNav: any;
  nav: any;
}

const NavItem = ({ icon, name, path, setNav, nav }: Props) => {
  const theme = useTheme();
  return (
    <>
      <ChakraLink
        as={Link}
        to={path}
        spy={true}
        offset={0}
        onSetActive={(e: any) => setNav(e)}
        style={{
          textDecoration: "none",
        }}
      >
        <Flex
          w={{base: "100%", xl: "25vw"}}
          py={{base:"1.5rem", xl: "1.7rem", "2xl": "3rem"}}
          justifyContent="space-between"
          bg={nav === path ? "#202020" : ""}
          transition="all .1s ease"
          _hover={{bg: "#202020"}}
          cursor="pointer"
          pl="3rem"
          pr="3rem"
        >
          <Icon
            as={icon}
            fontSize={{base: "2xl", sm: "xl", xl: "xl", "2xl": "2xl"}}
            fill={nav === path ? "secondary" : "tertiary"}
            alignSelf="center"
          />
          <Text
            color={nav === path ? "secondary" : "tertiary"}
            fontSize={{base: "md", sm: "sm", xl: "md", "2xl": "lg"}}
            fontFamily={theme.fonts.secondary}
          >
            {name}
          </Text>
        </Flex>
      </ChakraLink>
    </>
  );
};

export default NavItem;
