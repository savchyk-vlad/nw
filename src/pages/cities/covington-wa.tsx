import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("covington-wa");

const CovingtonCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default CovingtonCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
