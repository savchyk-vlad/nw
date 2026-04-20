import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("maple-valley-wa");

const MapleValleyCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MapleValleyCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
