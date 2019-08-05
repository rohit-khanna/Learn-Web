/**
 * method to call the MAP API to fetch the directions
 * @param {*} start start Endpoint
 * @param {*} end end Endpoint
 * @param {*} waypoints inbetween wayPoints Array
 * @returns {*} directions  
 */
const FetchDirections = (start, end, pathStops) => {
  return new Promise((resolve, reject) => {
    if (window.google) {
      const waypoints = pathStops.map(({ lat, lng }) => {
        return {
          location: {
            lat: Number(lat),
            lng: Number(lng)
          },
          stopover: false
        };
      });
      const DirectionsService = new window.google.maps.DirectionsService();
      DirectionsService.route(
        {
          origin: { lat: Number(start.lat), lng: Number(start.lng) },
          destination: {
            lat: Number(end.lat),
            lng: Number(end.lng)
          },
          waypoints,
          travelMode: window.google.maps.TravelMode.DRIVING
        },
        (result, status) => {
          if (status === window.google.maps.DirectionsStatus.OK) {
            resolve(result);
          } else {
            reject("No Directions fetched");
          }
        }
      );
    } else {
      reject("google API not loaded");
    }
  });
  // const directions = {};

  // return directions;
};

const MapService = { FetchDirections };

export default MapService;
