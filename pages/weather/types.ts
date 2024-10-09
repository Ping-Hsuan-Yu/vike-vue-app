export type WeatherData = {
  datasetDescription: string;
  locationName: string;
  description: string;
  data: { dataTime: string; value: string }[];
};

export interface Weather {
  success: string;
  result: Result;
  records: Records;
}

export interface Result {
  resource_id: string;
  fields: Field[];
}

export interface Field {
  id: string;
  type: string;
}

export interface Records {
  locations: Location[];
}

export interface Location {
  datasetDescription: string;
  locationsName: string;
  dataid: string;
  location: Location2[];
}

export interface Location2 {
  locationName: string;
  geocode: string;
  lat: string;
  lon: string;
  weatherElement: WeatherElement[];
}

export interface WeatherElement {
  elementName: string;
  description: string;
  time: Time[];
}

export interface Time {
  dataTime: string;
  elementValue: ElementValue[];
}

export interface ElementValue {
  value: string;
  measures: string;
}
