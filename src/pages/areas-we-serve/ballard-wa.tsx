import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("ballard-wa");

const BallardCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default BallardCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
