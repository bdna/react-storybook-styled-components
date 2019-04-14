import React, { Component } from 'react';
import axios from 'axios';

import config from '../config';
import ThemeProvider from './ThemeProvider';

const Context = React.createContext({});

function getData() {
	return axios.get(config.APIUrl).then((res) => {
		localStorage.setItem('data', JSON.stringify(res.data));
		return res.data;
	}).catch(() => {
		return JSON.parse(localStorage.getItem('data') || '');
	})
}

class DataProvider extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		
		this.updateData = this.updateData.bind(this);
	}
	
	updateData() {
		return getData().then(data => {
			this.setState({
				theme: data.theme,
				reviews: data.reviews,
				placeId: data.placeId
			})
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
		const { theme, reviews, placeId } = this.state;
		
		if (!reviews) return null;
		
		return (
			<Context.Provider value={{ reviews, placeId, rehydrate: this.updateData }}>
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
			{context => <Component {...props} reviews={context.reviews} />}
		</Context.Consumer>
	);
}

export function withData(Component) {
	return props => (
		<Context.Consumer>
			{context => <Component {...props} placeId={context.placeId} rehydrate={context.rehydrate} />}
		</Context.Consumer>
	);
}

// withTheme is available from the styled-components package
// https://www.styled-components.com/docs/advanced#theming
