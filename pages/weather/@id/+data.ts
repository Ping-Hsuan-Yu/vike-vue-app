// https://vike.dev/data

import type { PageContextServer } from "vike/types";
import { getWeatherData } from "./getWeatherData";

export type Data = Awaited<ReturnType<typeof data>>;

export const data = async (pageContext: PageContextServer) => await getWeatherData(pageContext.routeParams!.id);
