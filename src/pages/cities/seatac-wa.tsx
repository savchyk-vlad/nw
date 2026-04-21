import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("seatac-wa");

const SeatacCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default SeatacCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
