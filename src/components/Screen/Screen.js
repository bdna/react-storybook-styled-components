import React from 'react';
import styled from 'styled-components';

// TODO: add theme
const Wrapper = styled.div`
	height: 100%;
	background: ${props => props.theme.color};
`;

function Screen() {
	return (
		<Wrapper>
			Screen Component
		</Wrapper>
	);
}

export default Screen;
