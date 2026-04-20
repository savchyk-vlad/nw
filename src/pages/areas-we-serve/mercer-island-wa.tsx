import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("mercer-island-wa");

const MercerIslandCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MercerIslandCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
