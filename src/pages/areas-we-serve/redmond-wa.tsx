import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("redmond-wa");

const RedmondCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default RedmondCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
