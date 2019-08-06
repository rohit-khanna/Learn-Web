/* eslint-disable no-throw-literal */
const endpoint = process.env.REACT_APP_API + "users";

/**
 * Method to handle the response from fetch API call
 * @param {*} res Response Object from fetch Call
 */
const _handleFetchResponse = async res => {
  if (res.status === 200 || res.status === 201) {
    let result = await res.json();
    return result;
  } else {
    throw "ServiceAPI Call failed. Status Code:" +
      res.status +
      "  " +
      res.statusText;
  }
};

const MyService = {
  /**
   * Return All courses
   */
  find: async function(id) {
    try {
      let url = endpoint;
      if (id) url = url + "/" + id;

      return _handleFetchResponse(await fetch(url));
    } catch (error) {
      throw new Error("find():" + error);
    }
  }
};

export { MyService };
