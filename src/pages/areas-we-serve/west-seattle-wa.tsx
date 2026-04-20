import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("west-seattle-wa");

const WestSeattleCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default WestSeattleCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
