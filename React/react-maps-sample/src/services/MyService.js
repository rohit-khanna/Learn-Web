import BaseService from "./BaseService";

/**
 * method to fetch Route Token from Backend Service
 * @param {*} url api endpoint
 * @param {*} route route to fetch
 * @param {*} data any data
 */
const fetchRouteToken = async (url, route, data) => {
  const data1 = await BaseService.fetch(url + route, "POST", data);
  return data1.token;
};

/**
 * method to fetch Route Information from backend
 * @param {*} url  api endpoint
 * @param {*} route route to fetch
 * @param {*} token token
 */
const getRoute = async (url, route, token) => {
  return await BaseService.fetch(url + route + "/" + token, "GET");
};

/**
 * method to fetch the Positions array from service
 * @param {*} url api enpoint
 * @param {*} route route to fetch 
 * @param {*} data data
 * @param {*} prevToken used, in case of retry's 
 */
const fetchDrivingRoute = async (url, route, data, prevToken) => {
  return new Promise(async (resolve, reject) => {
    try {
      var token = "";
      if (!prevToken) {
        token = await fetchRouteToken(url, route, data);
      } else {
        token = prevToken;
      }

      if (token) {
        const positionsResult = await getRoute(url, route, token);
        if (positionsResult.status === "in progress") {
          await fetchDrivingRoute(url, route, data, token);
        }
        resolve(positionsResult);
      } else {
        reject("Error While fetching data");
      }
    } catch (e) {
      reject(e);
    }
  });
};

const MyService = { fetchRoutePositions: fetchDrivingRoute };

export default MyService;
