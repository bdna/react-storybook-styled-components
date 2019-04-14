import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import { withReviews } from "../../providers/DataProvider";
import Review from "../Review/Review";

const Wrapper = styled.ul`
  position: absolute;
  bottom: 0;
  left: 0;
  max-width: 400px;
  margin: 0;
  padding: 1.5em;
  list-style: none;
`;

function ReviewList(props) {
  return (
    <Wrapper>
      {props.reviews.map(review => (
        <Review key={review.id} {...review} />
      ))}
    </Wrapper>
  );
}

ReviewList.propTypes = {
  reviews: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      text: propTypes.string.isRequired
    })
  )
};

export default withReviews(ReviewList);
