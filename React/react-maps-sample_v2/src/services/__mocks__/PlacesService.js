import data from "./places.mock.json";

const PlacesService = {
  searchPlaces: function() {
    return Promise.resolve(data);
  }
};

export default PlacesService;
