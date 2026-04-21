import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("fremont-wa");

const FremontCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default FremontCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
