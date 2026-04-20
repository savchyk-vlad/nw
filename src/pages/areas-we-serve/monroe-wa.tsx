import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("monroe-wa");

const MonroeCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MonroeCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
