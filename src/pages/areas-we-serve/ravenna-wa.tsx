import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("ravenna-wa");

const RavennaCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default RavennaCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
