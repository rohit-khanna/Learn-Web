const endpoint = process.env.MOCK_API_ENDPOINT + "courses";
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
const CourseService = {
  /**
     * This is Save method to insert new record
     */
  saveAsync: async function(course) {
    try {
      let res = await fetch(endpoint, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(course) // body data type must match "Content-Type" header
      });
      return this._handleFetchResponse(res);
    } catch (e) {
      throw new Error("save():" + e);
    }
  },

  /**
     * Return All courses
     */
  findAllAsync: async function() {
    try {
      return _handleFetchResponse(await fetch(endpoint));
    } catch (error) {
      throw new Error("findAll():" + error);
    }
  },

  /**
     * return course by Id
     * @param {*} id Identifier
     */
  findByIdAsync: async function(id) {
    try {
      return this._handleFetchResponse(await fetch(endpoint + "/" + id));
    } catch (error) {
      throw new Error("findById():" + error);
    }
  }

  // /**
  //    * Update course by Id
  //    * @param {*} id identifier
  //    */
  // async updateAsync(course) {
  //   try {
  //     let res = await fetch(endpoint + "/" + course.id, {
  //       method: "PUT", // *GET, POST, PUT, DELETE, etc.
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8"
  //       },
  //       body: JSON.stringify(course) // body data type must match "Content-Type" header
  //     });

  //     return this._handleFetchResponse(res);
  //   } catch (e) {
  //     throw new Error("update():" + e);
  //   }
  // }

  // /**
  //    * Remove the course with ID
  //    * @param {*} id identifier
  //    */
  // async removeAsync(id) {
  //   try {
  //     let res = await fetch(endpoint + "/" + id, {
  //       method: "DELETE", // *GET, POST, PUT, DELETE, etc.
  //       headers: {
  //         "Content-Type": "application/json; charset=utf-8"
  //       }
  //     });
  //     return this._handleFetchResponse(res);
  //   } catch (e) {
  //     throw new Error("remove():" + e);
  //   }
  // }
};

export default CourseService;
