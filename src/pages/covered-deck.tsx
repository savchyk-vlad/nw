import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../components/service-landing-page";
import { getServicePage } from "../data/service-pages";

const service = getServicePage("covered-deck");

const CoveredDeckPage = () => <ServiceLandingPage service={service} />;

export default CoveredDeckPage;

export const Head = createServicePageHead(service);
