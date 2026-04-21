import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("newcastle-wa");

const NewcastleCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default NewcastleCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
