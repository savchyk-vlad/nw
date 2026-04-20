import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("tukwila-wa");

const TukwilaCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default TukwilaCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
