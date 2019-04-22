import React from "react";
import styled from "styled-components";

import { withData } from "../../providers/DataProvider";

const List = styled.ul`
  margin: 0;
  padding: 1.5em;
  list-style: none;
`;

const Label = styled.label`
  color: ${props => props.theme.fontColor}
  user-select: none;
  font-size: 1.4em;
  line-height: 50px;
  cursor: pointer;
  opacity: ${props => (props.visible ? 1 : 0.4)}
`;

function UserList({ people, setPersonVisibility }) {
  return (
    <List>
      {Object.keys(people).map(key => (
        <li key={key}>
          <Label visible={people[key].visible}>
            <input
              type="checkbox"
              checked={people[key].visible}
              onChange={e => setPersonVisibility(key, e.target.checked)}
            />
            {people[key].name}
          </Label>
        </li>
      ))}
    </List>
  );
}

export default withData(UserList);
