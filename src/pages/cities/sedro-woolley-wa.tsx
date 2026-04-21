import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("sedro-woolley-wa");

const SedroWoolleyCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default SedroWoolleyCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
