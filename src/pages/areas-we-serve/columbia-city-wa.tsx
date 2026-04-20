import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("columbia-city-wa");

const ColumbiaCityCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default ColumbiaCityCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
