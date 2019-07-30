import BaseService from "./BaseService";

const endpoint = process.env.API_ENDPOINT + "route";

/**
 * method to fetch Route Token from Backend Service
 * @param {*} url api endpoint
 * @param {*} data any data
 */
const fetchRouteToken = async (url, data) => {
  const data1 = await BaseService.fetch(url, "POST", data);

  return data1.token;
};

/**
 * method to fetch Route Information from backend
 * @param {*} url  api endpoint
 * @param {*} token token
 */
const getRoute = async (url, token) => {
  return await BaseService.fetch(url + "/" + token, "GET");
};

/**
 * method to fetch the Positions array from service
 * @param {*} data data
 * @param {*} prevToken used, in case of retry's
 */
const fetchDrivingRoute = async (data, prevToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      var token = "";
      if (!prevToken) {
        token = await fetchRouteToken(endpoint, data);
      } else {
        token = prevToken;
      }

      if (token) {
        const positionsResult = await getRoute(endpoint, token);
        if (positionsResult.status === "in progress") {
          await fetchDrivingRoute(data, token);
        }
        return resolve(positionsResult);
      } else {
        return reject("Error While fetching data");
      }
    } catch (e) {
      return reject(e);
    }
  });
};

const MyService = { fetchRoutePositions: fetchDrivingRoute };

export default MyService;
