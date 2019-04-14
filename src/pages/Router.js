import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import ScreenPage from './ScreenPage/ScreenPage';
import ConfigPage from './ConfigPage/ConfigPage';

function Router() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/" component={ScreenPage}/>
				<Route path="/about" component={ConfigPage}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
