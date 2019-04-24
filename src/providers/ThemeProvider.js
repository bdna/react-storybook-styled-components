import React from "react";
import { ThemeProvider } from "styled-components";

import config from "../config";

function Themes(props) {
  const themes = {
    light: {
      name: "light",
      color: "250, 250, 250",
      fontColor: "black"
    },
    dark: {
      name: "dark",
      color: "20, 20, 20",
      fontColor: "white"
    }
  };

  const theme = themes[props.theme] || themes[config.defaultTheme];

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

export default Themes;
