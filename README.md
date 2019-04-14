# React / Storybook / Styled Components

Basic scaffold of a React app to experiment with Storybook and Styled Components.

- The homepage shows reviews for a sample restaurant
- Some options can be changed by visiting the `/config` route in browser

## Technical Notes
- Uses a node API server that allows users to change some configuration, and connects to Google Places API for real reviews
- Client reloads data on a 1-minute interval
- Client uses Service Workers and `localStorage` to continue to work offline

## Getting started
1. `npm install` - install dependencies
2. `npm start` - client runs on port 3000; server runs on port 3001

## Useful Scripts
1. `npm run start:client` runs the client individually on port 3000
2. `npm run start:server` runs the server individually on port 3001

## Common Tasks
1. **Modify Appearance** - Styles are using styled-components - the CSS is co-located with the components in the '/src/components' directory.  Some global CSS is in `/src/index.css`
2. **Add / Modify Themes** - Theme mappings and properties are in `/src/providers/ThemeProvider`
3. **Modify API Interaction** - API interaction and data handling is done in `/src/providers/DataProvider` and then propogated through the app using React's `context`
