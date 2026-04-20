import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("greenwood-wa");

const GreenwoodCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default GreenwoodCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
