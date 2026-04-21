import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("beacon-hill-wa");

const BeaconHillCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default BeaconHillCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
