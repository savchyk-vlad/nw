import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("kirkland-wa");

const KirklandCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default KirklandCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
