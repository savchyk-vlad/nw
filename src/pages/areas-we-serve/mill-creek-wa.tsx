import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("mill-creek-wa");

const MillCreekCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MillCreekCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
