import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("wallingford-wa");

const WallingfordCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default WallingfordCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
