import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("des-moines-wa");

const DesMoinesCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default DesMoinesCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
