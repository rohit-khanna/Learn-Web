//Google Map Api key
export const MAP_API_KEY = "";

// Google PLaces API url
export const PLACES_API_URL =
  "https://maps.googleapis.com/maps/api/place/autocomplete/json?input=" +
  "<SEARCH>" +
  "&types=geocode&key=" +
  MAP_API_KEY;

// Backnd server URL
export const BACKEND_URL = "https://mock-api.dev.CLIENT.com/";

// Google map directions url
export const MAP_API_URL = `https://maps.googleapis.com/maps/api/js?v=3.exp&key=${MAP_API_KEY}&libraries=geometry,drawing,places`;
