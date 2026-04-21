import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("burien-wa");

const BurienCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default BurienCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
