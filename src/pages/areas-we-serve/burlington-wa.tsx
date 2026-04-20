import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("burlington-wa");

const BurlingtonCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default BurlingtonCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
