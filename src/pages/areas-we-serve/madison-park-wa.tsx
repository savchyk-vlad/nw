import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("madison-park-wa");

const MadisonParkCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MadisonParkCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
