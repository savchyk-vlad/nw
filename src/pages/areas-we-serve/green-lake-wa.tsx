import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("green-lake-wa");

const GreenLakeCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default GreenLakeCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
