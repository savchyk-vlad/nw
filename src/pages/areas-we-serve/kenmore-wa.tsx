import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("kenmore-wa");

const KenmoreCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default KenmoreCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
