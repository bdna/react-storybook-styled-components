import React from "react";
import { ThemeProvider } from "styled-components";

import config from "../config";

// TODO: import images & add to manifest
function Themes(props) {
  const themes = {
    green: {
      name: "green",
      color: "0, 112, 74",
      fontColor: "white",
      image:
        "http://barstoolsfurniture.com/wp-content/uploads/2017/10/Mumin-Kaffe-A-Cheery-Coffee-Shop-Design-that-Your-Inner-Kid-Will-Love_1.jpg"
    },
    light: {
      name: "light",
      color: "250, 250, 250",
      fontColor: "black",
      image:
        "http://barstoolsfurniture.com/wp-content/uploads/2017/10/Mumin-Kaffe-A-Cheery-Coffee-Shop-Design-that-Your-Inner-Kid-Will-Love_1.jpg"
    },
    dark: {
      name: "dark",
      color: "0, 0, 0",
      fontColor: "white",
      image:
        "http://barstoolsfurniture.com/wp-content/uploads/2017/10/Mumin-Kaffe-A-Cheery-Coffee-Shop-Design-that-Your-Inner-Kid-Will-Love_1.jpg"
    }
  };

  const theme = themes[props.theme] || themes[config.defaultTheme];

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

// TODO: propTypes

export default Themes;
