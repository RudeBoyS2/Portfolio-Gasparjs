import { Flex, Text, useTheme, Image } from "@chakra-ui/react";
import Button from "../components/Button";
import TechsIcon from "../components/TechsIcon";
import { Link } from "react-scroll";
import Typewriter from "typewriter-effect";
import { useRouter } from "next/router";
import english from "../translations/en/en.json"
import spanish from "../translations/es/es.json"

const Main = () => {
  const { locale } = useRouter();
  const theme = useTheme();
  console.log(locale)

  return (
    <>
      <Flex
        minH="100vh"
        w={{ base: "100vw", sm: "auto" }}
        position="relative"
        zIndex="5"
        id="/"
        flexDir="column"
        alignContent="center"
        justifyContent={{base: "center", "2xl": "space-evenly"}}
        backdropFilter="blur(1px)"
      >
        <Flex
          justifyContent="center"
          alignContent="center"
          flexDir={["column", "column", "row", "row", "row", "row"]}
          gap={{ base: "0", sm: "4rem", "2xl": "1rem" }}
          h={{ sm: "350px" }}
          w="100%"
          mt={{"2xl": "14" }}
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
              {locale === "en-US" ? english.main.heading.first : spanish.main.heading.first}
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

          <Image
            alignSelf="center"
            alt="Gaspar Escobar"
            src="https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666311482/aaa_saoxjf.png"
            fit="cover"
            h={{ base: "300px", sm: "350px" }}
            w={{base: "300px", sm: "350px", lg: "auto", "2xl": "600px" }}
            position="relative"
            display={{ base: "block", sm: "none", md: "block" }}
          />
        </Flex>

        <Flex
          justifyContent="center"
          gap="2rem"
          alignSelf="center"
        >
          <a
            href="https://www.dropbox.com/s/v3wcee6qgxpmtwj/Gaspar%20Escobar%20-%20Frontend%20ReactJS%20%26%20NextJS%20Developer%20-%20CV.pdf?dl=1"
            download
            target="_blank"
            rel="noreferrer"
          >
            <Button w="175px" content={locale === "en-US" ? english.main.button.first : spanish.main.button.first} />
          </a>
          <Link to="contact" spy={true}>
            <Button content={locale === "en-US" ? english.main.button.second : spanish.main.button.second} />
          </Link>
        </Flex>
        <Flex
          w="100%"
          mt="6"
          justifyContent="space-around"
          // mb={{ base: "3rem", lg: "6rem", xl: "3rem", "2xl": "auto" }}
          flexDir="column"
          gap="2rem"
          // mt={{ base: "auto", lg: "10", xl: "auto", "2xl": "auto" }}
          p="1rem"
        >
          <Flex justifyContent="center" gap="1rem" flexWrap="wrap">
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663856274/html_hjlzsl.png"
              alt="html logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663856738/CSS-Logo_nugbhg.png"
              alt="css logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663856817/JavaScript-logo_sxiss8.png"
              alt="javascript logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663858300/Typescript_logo_2020.svg_hobvh4.png"
              alt="typescript logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663856844/1200px-React.svg_aewkox.png"
              alt="react logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/dxgrn0qtx/image/upload/v1665958088/next-js-logo-7929BCD36F-seeklogo.com_kvvs7h.png"
              alt="next logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663856892/5848309bcef1014c0b5e4a9a_fbvhg7.png"
              alt="redux logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663857068/rzylUjaf_400x400-removebg-preview_r2o3jt.png"
              alt="chakra logo"
              width="none"
            />
          </Flex>

          <Flex justifyContent="center" gap="2rem" flexWrap="wrap">
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663857396/1200px-Node.js_logo.svg_ep0yw5.png"
              alt="node logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663857488/Expressjs_zhwchj.png"
              alt="express logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663857517/MongoDB_Logo.svg_bqal2y.png"
              alt="mongo logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/diylksocz/image/upload/v1663857594/MySQL-logo_jz68gg.png"
              alt="mysql logo"
            />
            <TechsIcon
              src="https://res.cloudinary.com/dxgrn0qtx/image/upload/v1666214283/mongoose_xlcp0j.png"
              alt="mongoose logo"
              width="80px"
            />
            <TechsIcon
              src="https://res.cloudinary.com/dxgrn0qtx/image/upload/v1665958286/logo-dark_zpoxu3.png"
              alt="prisma logo"
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Main;
