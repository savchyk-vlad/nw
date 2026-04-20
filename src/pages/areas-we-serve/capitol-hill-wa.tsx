import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("capitol-hill-wa");

const CapitolHillCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default CapitolHillCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
