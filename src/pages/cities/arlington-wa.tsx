import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("arlington-wa");

const ArlingtonCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default ArlingtonCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
