import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("federal-way-wa");

const FederalyCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default FederalyCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
