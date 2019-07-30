# React Maps Sample v2

This project is a Extension of [Previous Sample](https://github.com/rohit-khanna/Learn-Web/tree/master/react-maps-sample) demo of using a MOCK Server to fetch the coordinates and plot the driving direction between them over a google map, using ReactJS, using [`react-google-maps`](https://tomchentw.github.io/react-google-maps/) wrapper over Google Maps.

The Text Boxes display autocomplete behaviour with data source as [Rest Countries](https://restcountries.eu/) :heart:
This API is not vast like `Google Places API` but does serve the purpose of displaying an autocomplete functionality.

## Configuration

You need to setup the following values, before running the solution:

- _API_ENDPOINT_ : The Endpoint of Your Service
- _API_KEY_ : The Google API Key, with Directions API enabled
- _MAP_API_URL_ : The Google Map API Url to fetch the Directions for Map
- _PLACES_API_URL_ : PLaces APi Url, Could be a Google Places API or the default that is mentioned.

These values are currently setup in `webpack.config.dev.js`.

Alternatively, if you are creating your app using `create-react-app`, you can simply mark these values in an `.env` file and while compiling, these values will automaticaly picked up and are available under `process.env.REACT_APP_<VAR>`, or you can use external npm modules like [`dotenv`](https://www.npmjs.com/package/dotenv), or [`dotenv-webpack`](https://www.npmjs.com/package/dotenv-webpack)

I used the approach using webpack, as this app is NOT created using `create-react-app` utility.

## Scripts

### `npm install`

to install the dependencies

### `npm run start`

to run the Application at Port :3000

### `npm run test`

_Work In Progress_

### `npm run build`

_Work In Progress_

### FAQ / Errors

- _http://localhost:3000 has been blocked by CORS policy: Request header field content-type is not allowed by Access-Control-Allow-Headers in preflight response._

  If you find this error on your browser console, try using this **Chrome** Extension [Allow-Control-Allow-Origin: \*](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)
