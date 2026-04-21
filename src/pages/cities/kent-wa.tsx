import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("kent-wa");

const KentCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default KentCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
