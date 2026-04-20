import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("outdoor-deck");

const OutdoorDeckPage = () => <ServiceLandingPage service={service} />;

export default OutdoorDeckPage;

export const Head = createServicePageHead(service);
