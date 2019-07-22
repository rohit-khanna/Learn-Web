# React Maps Sample
This project is a demo of using a MOCK Server to fetch the coordinates and plot the driving direction between them over a google map, using ReactJS. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This app uses: 
1. [react-google-maps](https://tomchentw.github.io/react-google-maps/) for maps integration.
2. [Formik](https://jaredpalmer.com/formik/) for React Forms

## Configurations
The Following configurations should be setup **before** running the application.
These are available at [config](src/config/index.js) file
- MAP_API_KEY: API Key from Google, with DirectionsAPI and LocationsAPI enabled
- BACKEND_URL: Url for backend Server.



## Steps to Run

### 1. Install all packages
run `npm install`

### 2. Run app in dev mode
run `npm start` or `npm run start`

## Available Scripts

In the project directory, you can run:

### `npm run lint`
To check for lint error/warnings

### `npm run start`
To run the app in development mode.

### `npm run build`
To generate the Production Build

### `npm run test`
To run snapshot tests

## References
- [react-bootstrap](https://react-bootstrap.github.io/)
- [Formik](https://jaredpalmer.com/formik/)
- [react-google-maps](https://tomchentw.github.io/react-google-maps/)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)


## Screen Prints

![Screen Print](https://github.com/rohit-khanna/Learn-Web/blob/master/react-maps-sample/screenprints/Landing.PNG)
![Screen Print](https://github.com/rohit-khanna/Learn-Web/blob/master/react-maps-sample/screenprints/Directions.PNG)






