import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("seattle-wa");

const SeattleCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default SeattleCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
