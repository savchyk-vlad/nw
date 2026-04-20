import * as React from "react";
import { Link } from "gatsby";
import renderHighlightedText from "../components/brand-text";
import SiteLayout from "../components/site-layout";

const effectiveDate = "April 18, 2026";

const TermsOfServicePage = () => (
  <SiteLayout>
    <section className="policy-hero">
      <div className="policy-hero__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M8 4.5h7l3 3V19a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V6.5a2 2 0 0 1 2-2z" />
          <path d="M15 4.5V8h3" />
          <path d="M8.5 14l2 2 4.5-5" />
        </svg>
      </div>
      <p className="policy-hero__eyebrow">Last Updated: {effectiveDate}</p>
      <h1>Terms of Service</h1>
      <p>
        These Terms of Service explain how{" "}
        <span className="brand-highlight">Northwood Renovation</span> provides
        website information, estimate requests, communication, and exterior
        renovation services. By using our website or contacting us through the
        site, you agree to these terms.
      </p>
      <strong>Effective Date: {effectiveDate}</strong>
    </section>

    <section className="policy-content" aria-label="Terms of service details">
      <article className="policy-card">
        <h2>1. Use of Our Website</h2>
        <p>
          The information on this website is provided for general informational
          purposes about{" "}
          <span className="brand-highlight">Northwood Renovation</span>, our
          services, and our service areas.
        </p>
        <p>
          You agree to use this website only for lawful purposes and not to
          interfere with the website’s operation, security, or availability.
        </p>
      </article>

      <article className="policy-card">
        <h2>2. Estimate Requests</h2>
        <p>
          Submitting a contact form or estimate request does not create a
          contract or guarantee service availability.
        </p>
        <p>
          Any estimate provided is based on the information available at the
          time and may change after an in-person review, site visit, material
          selection, project scope changes, or additional conditions discovered
          during inspection.
        </p>
      </article>

      <article className="policy-card">
        <h2>3. Project Pricing and Scope</h2>
        <p>
          Final pricing, materials, timelines, and project details must be
          confirmed in a written agreement before work begins.
        </p>
        <p>
          Changes to the project scope, materials, site conditions, permits, or
          customer requests may affect the final cost and schedule.
        </p>
      </article>

      <article className="policy-card">
        <h2>4. Scheduling and Delays</h2>
        <p>
          Project schedules may depend on weather, material availability,
          permitting, inspections, labor availability, and site conditions.
        </p>
        <p>
          <span className="brand-highlight">Northwood Renovation</span> will
          make reasonable efforts to communicate scheduling updates, but
          estimated timelines are not guaranteed unless specifically stated in a
          written agreement.
        </p>
      </article>

      <article className="policy-card">
        <h2>5. Customer Responsibilities</h2>
        <p>
          Customers are responsible for providing accurate project information,
          property access, and any required approvals from homeowners
          associations, landlords, or other property decision-makers.
        </p>
        <p>
          Customers may also be responsible for confirming property lines,
          utility markings, permits, or local requirements depending on the
          project.
        </p>
      </article>

      <article className="policy-card">
        <h2>6. Photos, Reviews, and Project Portfolio</h2>
        <p>
          With customer permission,{" "}
          <span className="brand-highlight">Northwood Renovation</span> may
          photograph completed or in-progress work for portfolio, website,
          social media, or marketing use.
        </p>
        <p>
          We will not intentionally publish personal contact details or
          sensitive property information without permission.
        </p>
      </article>

      <article className="policy-card">
        <h2>7. Website Content</h2>
        <p>
          Photos, descriptions, service information, and examples on this
          website are provided to show the types of work we offer. Actual
          project results may vary based on property conditions, materials,
          budget, and design choices.
        </p>
      </article>

      <article className="policy-card">
        <h2>8. Third-Party Links</h2>
        <p>
          This website may link to third-party websites such as review
          platforms, social media pages, suppliers, or partner services.
        </p>
        <p>
          <span className="brand-highlight">Northwood Renovation</span> is not
          responsible for the content, policies, or practices of third-party
          websites.
        </p>
      </article>

      <article className="policy-card">
        <h2>9. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law,{" "}
          <span className="brand-highlight">Northwood Renovation</span> is not
          responsible for indirect, incidental, or consequential damages related
          to use of the website or reliance on website information.
        </p>
        <p>
          Nothing on this website replaces a written project agreement,
          warranty, invoice, or signed service contract.
        </p>
      </article>

      <article className="policy-card">
        <h2>10. Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. Any changes
          will be posted on this page with an updated effective date.
        </p>
      </article>

      <article className="policy-card policy-card--contact">
        <h2>11. Contact Us</h2>
        <p>
          If you have questions about these Terms of Service, please contact us.
        </p>
        <address>
          <strong className="brand-highlight">Northwood Renovation</strong>
          <a href="tel:+10000000000">Phone: (000) 000-0000</a>
          <a href="mailto:northwoodrenovation@gmail.com">
            Email: northwoodrenovation@gmail.com
          </a>
          <span>{renderHighlightedText("Service Area: Seattle, WA and nearby areas")}</span>
        </address>
      </article>

      <aside className="policy-cta">
        <div>
          <p>Ready to discuss your project?</p>
          <h2>Let’s talk through your goals, timeline, and next steps.</h2>
        </div>
        <Link to="/contact">
          Contact <span className="brand-highlight">Northwood Renovation</span>
        </Link>
      </aside>
    </section>
  </SiteLayout>
);

export default TermsOfServicePage;
