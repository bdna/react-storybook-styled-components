import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Outer = styled.div`
  display: flex;
  align-items: center;
  background: #222;
  height: 100vh;
`;

const Inner = styled.div`
  background: white;
  margin: 0 auto;
  height: ${props => props.height}px;
  width: ${props => props.width}px;
  overflow: hidden;
`;

function CenteredContainer({ children, width, height }) {
  return (
    <Outer>
      <Inner height={height} width={width}>
        {children}
      </Inner>
    </Outer>
  );
}

CenteredContainer.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

CenteredContainer.defaultProps = {
  width: 1280,
  height: 720
};

export default CenteredContainer;
