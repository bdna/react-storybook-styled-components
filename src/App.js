import React, { Component } from "react";
import DataProvider from "./providers/DataProvider";

import Router from "./pages/Router";

class App extends Component {
  render() {
    return (
      <DataProvider>
        <Router />
      </DataProvider>
    );
  }
}

export default App;
