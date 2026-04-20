import * as React from "react";
import { HeadFC } from "gatsby";
import ServiceLandingPage from "../../components/service-landing-page";
import { getServicePage } from "../../data/service-pages";

const service = getServicePage("wood-deck");

const WoodDeckPage = () => <ServiceLandingPage service={service} />;

export default WoodDeckPage;

export const Head: HeadFC = () => (
  <>
    <title>{service.titleTag}</title>
    <meta name="description" content={service.metaDescription} />
  </>
);
