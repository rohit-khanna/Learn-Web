import { FETCH_ROUTE_SUCCESS, FETCH_ROUTE_ERROR } from "./actionTypes";
import { MyService } from "../../services";
import { beginApiCall, apiCallError } from "./apiStatusActions";

//action creator
export function fetchRouteSuccess(routeObject) {
  return {
    type: FETCH_ROUTE_SUCCESS,
    routeResult: routeObject
  };
}

//action creator
export function fetchRouteError(error) {
  return {
    type: FETCH_ROUTE_ERROR,
    routeResult: {
      error
    }
  };
}

//thunk
export function fetchRoute(start, end) {
  return async function(dispatch) {
    try {
      dispatch(beginApiCall());
      const routeObject = await MyService.fetchRoutePositions(
        {
          origin: start,
          destination: end
        },
        null
      );
      return dispatch(fetchRouteSuccess(routeObject));
    } catch (error) {
      dispatch(apiCallError());
      // alert(error);
      dispatch(fetchRouteError(error));
    }
  };
}
