import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("lake-forest-park-wa");

const LakeForestParkCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default LakeForestParkCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
