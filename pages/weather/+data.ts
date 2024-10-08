import type { Weather } from "./types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async () => {
  const response = await fetch(
    `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=${import.meta.env.VITE_CWB_AUTH_KEY}&elementName=T`
  );

  const weatherData = (await response.json()) as Weather;
  const weathers = minimize(weatherData);
  return weathers;
};

function minimize(weatherData: Weather): {
  datasetDescription: string;
  locationNameList: string[];
} {
  const data = weatherData.records.locations[0];
  data.location.sort((a, b) => a.geocode.localeCompare(b.geocode));
  const output = {
    datasetDescription: data.datasetDescription,
    locationNameList: data.location.map((location) => location.locationName),
  };
  return output;
}
