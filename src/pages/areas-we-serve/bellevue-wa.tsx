import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("bellevue-wa");

const BellevueCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default BellevueCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
