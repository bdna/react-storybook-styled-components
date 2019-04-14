import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CenteredContainer from "../../components/CenteredContainer/CenteredContainer";
import Screen from "../../components/Screen/Screen";

const FloatingLink = styled(Link)`
  position: fixed;
  top: 20px;
  right: 20px;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  font-size: 1.2em;
`;

function ScreenPage() {
  return (
    <>
      <CenteredContainer>
        <Screen />
      </CenteredContainer>
      <FloatingLink to="/config">Settings</FloatingLink>
    </>
  );
}

export default ScreenPage;
