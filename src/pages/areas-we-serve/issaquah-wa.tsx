import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("issaquah-wa");

const IssaquahCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default IssaquahCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
