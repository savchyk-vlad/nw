import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("mount-baker-wa");

const MountBakerCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MountBakerCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
