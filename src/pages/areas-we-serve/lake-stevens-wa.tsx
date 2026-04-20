import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("lake-stevens-wa");

const LakeStevensCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default LakeStevensCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
