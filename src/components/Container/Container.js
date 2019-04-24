import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 100vh;
  background: rgb(${props => props.theme.color});
`;

const Inner = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

function Container({ children }) {
  return (
    <Wrapper>
      <Inner>{children}</Inner>
    </Wrapper>
  );
}

export default Container;
