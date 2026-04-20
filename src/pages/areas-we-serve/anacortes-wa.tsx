import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("anacortes-wa");

const AnacortesCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default AnacortesCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
