import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	height: 100%;
	background: ${props => props.theme.background};
`;

function Screen() {
	return (
		<Wrapper>
			Screen Component
		</Wrapper>
	);
}

export default Screen;
