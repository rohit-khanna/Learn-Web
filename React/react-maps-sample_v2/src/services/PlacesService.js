import BaseService from "./BaseService";

/**
 * API for searching places from a url
 * @param {*} searchString seach string
 * @param {*} url URL to fetch data
 */
const searchPlaces = async (searchString, url) => {
  const serviceUrl = url.replace("<SEARCH>", searchString);
  try {
    const result = await BaseService.fetch(serviceUrl, "GET");
    return result;
  } catch (e) {
    alert(e);
    throw new Error(e.message);
  }
};

const PlacesService = { searchPlaces };

export default PlacesService;
