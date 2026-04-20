import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("phinney-ridge-wa");

const PhinneyRidgeCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default PhinneyRidgeCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
