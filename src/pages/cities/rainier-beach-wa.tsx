import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("rainier-beach-wa");

const RainierBeachCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default RainierBeachCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
