// https://vike.dev/onBeforePrerenderStart

import type { OnBeforePrerenderStartAsync } from "vike/types";
import type { Data as WeatherData } from "../@id/+data";
import type { Data as CityData } from "../+data";
import { data } from "../+data";

type Data = CityData | WeatherData;

const baseUrl = import.meta.env.PUBLIC_ENV__BASE_URL ?? ""

export const onBeforePrerenderStart: OnBeforePrerenderStartAsync<Data> = async (): ReturnType<
  OnBeforePrerenderStartAsync<Data>
> => (await data()).locationNameList.map(city=>`${baseUrl}/weather/${city}`);
