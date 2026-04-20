import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("clyde-hill-wa");

const ClydeHillCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default ClydeHillCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
