import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../theme";
import "../styles/main.css"
import ParticlesBackground from "../components/ParticlesBackground";
import particles2 from "../utils/particles2.json";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
        <ParticlesBackground particles={particles2} />
    </>
  );
}

export default MyApp;
