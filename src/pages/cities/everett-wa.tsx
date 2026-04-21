import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("everett-wa");

const EverettCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default EverettCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
