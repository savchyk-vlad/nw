import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("sammamish-wa");

const SammamishCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default SammamishCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
