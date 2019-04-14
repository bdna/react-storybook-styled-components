import React, { Component } from 'react';
import ThemeProvider from './ThemeProvider';

const Context = React.createContext({});

const sampleData = { theme: 'green', reviews: [] };

class DataProvider extends Component {
	state = {
		...sampleData
	};
	
	componentDidMount() {
		// TODO: get data from API then assign to state.data
		// this.setState({ sampleData });
	}
	
	render() {
		const { children } = this.props;
		const { theme, reviews } = this.state;
		
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
