import { extendTheme } from "@chakra-ui/react";
import "@fontsource/arimo/500.css";
import "@fontsource/poppins/700.css";

const theme = extendTheme({
  styles: {
    global: {
      "html, body, #root, main": {
        height: "100%",
        width: "100%",
      },
    },
  },
  fonts: {
    primary: "Arimo",
    secondary: "Poppins",
  },
  colors: {
    primary: "#141516",
    secondary: "#495dee",
    tertiary: "#f8f8f9",
  },
  components: {
    Button: {
      baseStyle: {
        _focus: "",
        _active: {
          bg: "none",
        },
      },
    },
  },
});

export default theme;
