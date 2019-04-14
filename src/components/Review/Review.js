import React from "react";
import styled from "styled-components";
import LinesEllipsis from "react-lines-ellipsis";
import propTypes from "prop-types";

const Wrapper = styled.li`
  color: ${props => props.theme.fontColor};
  margin-top: 1em;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 0.8em;
`;

const Body = styled(LinesEllipsis)`
  font-weight: 1.2rem;
`;

function Review({ name, text }) {
  return (
    <Wrapper>
      <Body text={text} maxLine={5} />
      <Name>{name}</Name>
    </Wrapper>
  );
}

Review.propTypes = {
  name: propTypes.string.isRequired,
  text: propTypes.string.isRequired
};

Wrapper.propTypes = {
  theme: propTypes.shape({
    fontColor: propTypes.string.isRequired
  })
};

export default Review;
