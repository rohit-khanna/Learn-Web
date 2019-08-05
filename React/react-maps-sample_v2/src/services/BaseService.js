/* eslint-disable no-async-promise-executor */
/**
 *  method to fetchdata from a URL
 * @param {*} url api endpoint
 * @param {*} method GET or POST
 * @param {*} data data
 */
const fetchFromService = async (url, method, data) => {
  return new Promise(async (resolve, reject) => {
    const payLoad = {
      method: method,
      headers: {
        "Content-Type": "application/json"
        //mode: "no-cors"
      }
    };

    if (data) payLoad.body = JSON.stringify(data);

    try {
      const response = await fetch(url, payLoad);

      if (!response.ok) {
        switch (response.status) {
          case 500:
            throw new Error("Internal Service Error");
          case 400:
            throw new Error("Not Found Error");
          default:
            throw new Error(response.status);
        }
      }
      const data1 = await response.json();
      resolve(data1);
    } catch (excep) {
      reject(excep.message);
    }
  });
};

const BaseService = { fetch: fetchFromService };

export default BaseService;
