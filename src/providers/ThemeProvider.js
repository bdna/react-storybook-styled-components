import React from 'react';
import { ThemeProvider } from 'styled-components';

// TODO: import images & add to manifest
function Themes(props) {
	const theme = {
		green: {
			color: '0, 112, 74',
			image: 'http://barstoolsfurniture.com/wp-content/uploads/2017/10/Mumin-Kaffe-A-Cheery-Coffee-Shop-Design-that-Your-Inner-Kid-Will-Love_1.jpg'
		},
		light: {
			background: 'lightgray'
		},
		dark: {
			background: 'black'
		}
	}[props.theme];
	
	return (
		<ThemeProvider theme={theme}>
			{props.children}
		</ThemeProvider>
	);
}

// TODO: propTypes & default theme

export default Themes;
