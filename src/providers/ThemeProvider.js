import React from 'react';
import { ThemeProvider } from 'styled-components';

function Themes(props) {
	const theme = {
		green: {
			background: 'lightgreen'
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

export default Themes;
