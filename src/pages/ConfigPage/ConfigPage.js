import React, { useState } from "react";
import { withTheme } from "styled-components";
import axios from "axios";
import config from "../../config";

import CenteredContainer from "../../components/CenteredContainer/CenteredContainer";
import ConfigurationForm from "../../components/ConfigurationForm/ConfigurationForm";
import { withData } from "../../providers/DataProvider";

function ConfigPage(props) {
  const [placeId, setPlaceId] = useState(props.placeId);
  const [theme, setTheme] = useState(props.theme.name);

  const save = e => {
    e.preventDefault();
    axios.put(config.APIUrl, { theme, placeId }).then(() => {
      props.rehydrate().then(() => props.history.push("/"));
    });
  };

  return (
    <CenteredContainer>
      <ConfigurationForm {...{ placeId, setPlaceId, theme, setTheme, save }} />
    </CenteredContainer>
  );
}

export default withData(withTheme(ConfigPage));
