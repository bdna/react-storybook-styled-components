import React, { Component } from "react";
import axios from "axios";

import config from "../config";
import ThemeProvider from "./ThemeProvider";

const Context = React.createContext({});

class DataProvider extends Component {
  state = {};

  componentDidMount() {
    axios.get(config.APIUrl).then(res => {
      this.setState({
        people: res.data.reduce((obj, person) => {
          obj[person.id] = person;
          return obj;
        }, {})
      });
    });
  }

  setPersonVisibility(id, isVisible) {
    axios.patch(`${config.APIUrl}/${id}`, { visible: isVisible }).then(res => {
      this.setState({
        people: {
          ...this.state.people,
          [res.data.id]: res.data
        }
      });
    });
  }

  render() {
    const { children } = this.props;
    const { people } = this.state;

    if (!people) return null;

    return (
      <Context.Provider
        value={{
          people,
          setPersonVisibility: this.setPersonVisibility.bind(this)
        }}
      >
        <ThemeProvider theme={config.defaultTheme}>{children}</ThemeProvider>
      </Context.Provider>
    );
  }
}

export default DataProvider;

export function withData(Component) {
  return props => (
    <Context.Consumer>
      {context => (
        <Component
          {...props}
          people={context.people}
          setPersonVisibility={context.setPersonVisibility}
        />
      )}
    </Context.Consumer>
  );
}

// withTheme is available from the styled-components package
// https://www.styled-components.com/docs/advanced#theming
