import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("mukilteo-wa");

const MukilteoCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MukilteoCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
