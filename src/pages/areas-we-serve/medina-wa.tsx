import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("medina-wa");

const MedinaCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MedinaCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
