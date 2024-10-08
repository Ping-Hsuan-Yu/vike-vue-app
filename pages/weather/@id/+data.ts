// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { Weather } from "../types";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => {
  const response = await fetch(
    `https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-089?Authorization=${
      import.meta.env.VITE_CWB_AUTH_KEY
    }&elementName=T&locationName=${pageContext.routeParams!.id}`
  );

  const weatherData = (await response.json()) as Weather;
  const weathers = minimize(weatherData);
  return weathers;
};

function minimize(weatherData: Weather): {
  datasetDescription: string;
  locationName: string;
  description: string;
  data: { dataTime: string; value: string }[];
} {
  const data = weatherData.records.locations[0].location[0];
  const output = {
    datasetDescription: weatherData.records.locations[0].datasetDescription,
    locationName: data.locationName,
    description: data.weatherElement[0].description,
    data: data.weatherElement[0].time.map((ele) => ({
      dataTime: ele.dataTime,
      value: ele.elementValue[0].value,
    })),
  };
  return output;
}
