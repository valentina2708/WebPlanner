
import { extendTheme } from "@chakra-ui/react";

const colors = {
  primary: {
    100: "#495C83",
    200: "#F8F9D7",
    300: "#7A86B6",
    400: "#A8A4CE",
    500: "#C8B6E2",
    600: "#2C3639",
    700: "#DDDDDD",
    800: "",
    900: ""
  }
};

const customTheme = extendTheme({ colors });

export default customTheme;