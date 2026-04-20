import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("renton-wa");

const RentonCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default RentonCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
