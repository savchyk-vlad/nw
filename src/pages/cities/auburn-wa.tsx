import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("auburn-wa");

const AuburnCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default AuburnCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
