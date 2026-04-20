import * as React from "react";
import ServiceLandingPage, {
  createServicePageHead,
} from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("wood-deck");

const WoodDeckPage = () => <ServiceLandingPage service={service} />;

export default WoodDeckPage;

export const Head = createServicePageHead(service);
