import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("wedgwood-wa");

const WedgwoodCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default WedgwoodCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
