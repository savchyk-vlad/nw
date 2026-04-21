import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("stanwood-wa");

const StanwoodCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default StanwoodCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
