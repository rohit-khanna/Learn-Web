const endpoint = process.env.MOCK_API_ENDPOINT + "authors";

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

const AuthorService = {
  /**
     * return course by Id
     */
  findAllAsync: async function() {
    try {
      return _handleFetchResponse(await fetch(endpoint));
    } catch (error) {
      throw new Error("findAll():" + error);
    }
  }
};

export default AuthorService;
