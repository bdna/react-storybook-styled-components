import React, { Component } from 'react';
import axios from 'axios';

import ThemeProvider from './ThemeProvider';

const Context = React.createContext({});

const API_URL = '//localhost:3001';

// TODO: add localstorage for offline
function getData() {
	return axios.get(API_URL).then((res) => {
		return res.data;
	}).catch(() => {
		return { theme: 'dark', reviews: [] };
	})
}

class DataProvider extends Component {
	state = {};
	
	updateData() {
		getData().then(data => {
			this.setState({ theme: data.theme, reviews: data.reviews })
		});
	}
	
	componentDidMount() {
		this.updateData();
		this.interval = window.setInterval(this.updateData.bind(this), 60000);
	}
	
	componentWillUnmount() {
		window.clearInterval(this.interval);
	}
	
	render() {
		const { children } = this.props;
		const { theme, reviews } = this.state;
		
		if (!reviews) return null;
		
		return (
			<Context.Provider value={reviews}>
				<ThemeProvider theme={theme}>
					{children}
				</ThemeProvider>
			</Context.Provider>
		)
	}
}

export default DataProvider;

export function withReviews(Component) {
	return props => (
		<Context.Consumer>
			{reviews => <Component {...props} reviews={reviews} />}
		</Context.Consumer>
	);
}

// withTheme is available from the styled-components package
// https://www.styled-components.com/docs/advanced#theming
