import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("queen-anne-wa");

const QueenAnneCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default QueenAnneCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
