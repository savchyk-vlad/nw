import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("magnolia-wa");

const MagnoliaCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MagnoliaCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
