import React from 'react';
import styled from 'styled-components';

import config from '../../config';

const Form = styled.form`
	background: white
`;

function ConfigurationForm(props) {
	return (
		<Form onSubmit={props.save}>
			<label>Place Id</label>
			<input value={props.placeId} onChange={e => props.setPlaceId(e.target.value)} />
			
			Or select an example:
			<ul>
				{ config.examplePlaces.map(place =>
					<li key={place.id} onClick={() => props.setPlaceId(place.id)}>
						{place.name}
					</li>
				)}
			</ul>
			
			<label>Theme</label>
			<ul>
				{ config.availableThemes.map(theme =>
					<li key={theme.id} onClick={() => props.setTheme(theme.id)}>
						{theme.name}
					</li>
				)}
			</ul>
			
			<button type="submit">Save</button>
		</Form>
	);
}

export default ConfigurationForm;
