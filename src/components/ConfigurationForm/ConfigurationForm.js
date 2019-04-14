import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

import config from "../../config";

const Form = styled.form`
  background: white;
  padding: 2em;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Label = styled.label`
  display: block;
  font-size: 1.2em;
  font-weight: bold;
`;

const Input = styled.input`
  display: block;
  width: 300px;
  padding: 1em;
  margin-bottom: 2em;
`;

const TextButton = styled.button`
  border: none;
  border-bottom: 1px dashed black;
  outline: none;
  background: none;
  cursor: pointer;
`;

function ConfigurationForm(props) {
  return (
    <Form onSubmit={props.save}>
      <Label>Place Id</Label>
      <Input
        value={props.placeId}
        onChange={e => props.setPlaceId(e.target.value)}
      />
      Or select an example:
      <List>
        {config.examplePlaces.map(place => (
          <li key={place.id}>
            <TextButton
              type="button"
              onClick={() => props.setPlaceId(place.id)}
            >
              {place.name}
            </TextButton>
          </li>
        ))}
      </List>
      <Label>Theme</Label>
      <List>
        {config.availableThemes.map(theme => (
          <li key={theme.id} onClick={() => props.setTheme(theme.id)}>
            <input
              type="radio"
              defaultChecked={props.theme === theme.id}
              name="theme"
            />{" "}
            {theme.name}
          </li>
        ))}
      </List>
      <button type="submit">Save</button>
    </Form>
  );
}

ConfigurationForm.propTypes = {
  save: propTypes.func.isRequired,
  setTheme: propTypes.func.isRequired,
  theme: propTypes.string.isRequired,
  setPlaceId: propTypes.func.isRequired,
  placeId: propTypes.string.isRequired
};

export default ConfigurationForm;
