import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("bothell-wa");

const BothellCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default BothellCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
