import { getJsonDataFromURL } from "./utils.js";

// OLD URL: https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=water_level&application=NOS.COOPS.TAC.WL&begin_date=20250103&end_date=20250104&datum=${datum}&station=${closestStationID}&time_zone=GMT&units=english&format=json
// t: time of observation
// s: standard deviation of 1 second samples used to computer height
// f: [O (no one cares), F (no one cares), R (when 1, indicates the rate of change tolerance limit was exceeded) , L (when 1, indicates that either the max or min expected water level height limit was exceeded)]
// v: Mean Sea Level in Feet.
// q: quality ( preliminary / verified )
// https://tidesandcurrents.noaa.gov/waterlevels.html?id=1611400&units=standard&bdate=20250103&edate=20250104&timezone=GMT&datum=MLLW&interval=6&action=data
// https://api.tidesandcurrents.noaa.gov/api/prod/responseHelp.html
// https://api.tidesandcurrents.noaa.gov/api/prod/

// NEW (01/30/25) sea level trends
// https://tidesandcurrents.noaa.gov/sltrends/sltrends_station.shtml?id=1612340
// phone call result:
// https://tidesandcurrents.noaa.gov/web_services_info.html

export function getTideData() {
  console.log("running getTideData");
  return new Promise((resolve, reject) => {
    const url =
      "https://api.tidesandcurrents.noaa.gov/mdapi/prod/webapi/stations.json?type=waterlevels&units=english";
    getJsonDataFromURL(url).then(async (data) => {
      const stationList = data.stations
        .filter((station) => station.tidal === true)
        .map((station) => ({
          name: station.name,
          lat: station.lat,
          lng: station.lng,
          datumsURL: station.datums.self,
          id: station.id,
        }));

      const closestStation = await getClosestStation(stationList);
      // const closestStation = stationList[0];
      const closestStationID = closestStation.id;
      const datum = "MSL"; // MSL means Mean Sea Level
      // const specificDataURL = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?product=water_level&application=Code_Blue_Foundation&datum=${datum}&station=${closestStationID}&time_zone=GMT&units=english&format=json&date=latest`;
      const specificDataURL = `https://api.tidesandcurrents.noaa.gov/api/prod/datagetter?begin_date=19740101&end_date=20241231&station=${closestStationID}&product=monthly_mean&datum=MSL&time_zone=gmt&units=metric&format=json`;
      getJsonDataFromURL(specificDataURL).then((data) => {
        const name = data.metadata.name;
        const coords = [data.metadata.lat, data.metadata.lon];
        const historicData = data.data[0];
        const currentData = data.data[data.data.length - 1];
        getJsonDataFromURL(closestStation.datumsURL).then((datums) => {
          resolve({ name, coords, historicData, currentData, datums });
        });
      });
    });
  });
}

async function getClosestStation(_stationList) {
  console.log("running getClosestStation");
  // Get Local Coordinates Start
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Find Closest Station Start
        const { latitude: userLat, longitude: userLng } = position.coords;
        let closestStation = null;
        let minDistanceSquared = Infinity;

        _stationList.forEach(({ lat, lng, datumsURL, name, id }) => {
          const distanceSquared =
            Math.pow(lat - userLat, 2) + Math.pow(lng - userLng, 2);
          if (distanceSquared < minDistanceSquared) {
            minDistanceSquared = distanceSquared;
            closestStation = { lat, lng, datumsURL, name, id };
          }
        });
        resolve(closestStation);

        // Find Closest Station End
      },
      (error) => {
        console.error("Error getting local coords: ", error);
      }
    );
  });
}
