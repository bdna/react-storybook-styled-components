import React from "react";
import { ThemeProvider } from "styled-components";

import titanic from "../assets/titanic.jpg";
import starbucks from "../assets/starbucks.jpeg";
import market from "../assets/market.jpg";

import config from "../config";

// TODO: import images & add to manifest
function Themes(props) {
  const themes = {
    green: {
      name: "green",
      color: "0, 112, 74",
      fontColor: "white",
      image: starbucks
    },
    light: {
      name: "light",
      color: "250, 250, 250",
      fontColor: "black",
      image: titanic
    },
    dark: {
      name: "dark",
      color: "0, 0, 0",
      fontColor: "white",
      image: market
    }
  };

  const theme = themes[props.theme] || themes[config.defaultTheme];

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
}

// TODO: propTypes

export default Themes;
