import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("woodinville-wa");

const WoodinvilleCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default WoodinvilleCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
