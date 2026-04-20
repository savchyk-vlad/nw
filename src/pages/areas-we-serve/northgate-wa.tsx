import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("northgate-wa");

const NorthgateCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default NorthgateCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
