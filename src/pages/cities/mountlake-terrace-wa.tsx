import * as React from "react";
import { CityServicePage, CityServicePageHead } from "../../components/city-service-page";
import { getCityServicePageBySlug } from "../../data/city-service-pages";

const page = getCityServicePageBySlug("mountlake-terrace-wa");

const MountlakeTerraceCityPage = () => (page ? <CityServicePage page={page} /> : null);

export default MountlakeTerraceCityPage;

export const Head = page ? CityServicePageHead(page) : undefined;
