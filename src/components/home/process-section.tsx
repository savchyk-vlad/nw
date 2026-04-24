import * as React from "react";
import renderHighlightedText from "../brand-text";
import processArrowIcon from "../../images/process-arrow.svg";
import processEstimateIcon from "../../images/process-estimate.svg";
import processPhoneIcon from "../../images/process-phone.svg";
import processScheduleIcon from "../../images/process-schedule.svg";
import processWorkBeginsIcon from "../../images/process-work-begins.svg";
import { BUSINESS_PHONE_DISPLAY } from "../../lib/site-metadata";

const processSteps = [
  {
    label: "Step 1",
    title: "Book Appointment",
    description:
      `Call ${BUSINESS_PHONE_DISPLAY} or fill out our online form. We'll schedule a convenient time to discuss your deck build, fence installation, or outdoor renovation project in Everett or Snohomish County.`,
    icon: processPhoneIcon,
    alt: "Phone icon",
  },
  {
    label: "Step 2",
    title: "On-Site Estimate",
    description:
      "We come to your Everett-area property, review the space, take measurements, discuss cedar vs. composite or wood vs. chain link options, and give you a clear written estimate - no vague phone quotes.",
    icon: processEstimateIcon,
    alt: "Estimate icon",
  },
  {
    label: "Step 3",
    title: "Schedule Installation",
    description:
      "Once you approve the estimate, we lock in materials, pull any required permits, confirm your installation date, and give you a clear project timeline so there are no surprises.",
    icon: processScheduleIcon,
    alt: "Schedule icon",
  },
  {
    label: "Step 4",
    title: "Work Begins",
    description:
      "Our Everett-based crew arrives on schedule, completes your deck or fence installation with care, and does a final walkthrough with you before we consider the job done.",
    icon: processWorkBeginsIcon,
    alt: "Construction work icon",
  },
];

const ProcessSection = () => (
  <section className="process-section" aria-labelledby="process-title">
    <div className="process-section__header">
      <p>How It Works</p>
      <h2 id="process-title">How Our Deck and Fence Installation Process Works</h2>
      <span>
        From first call to final walkthrough, we keep the process clear,
        organized, and easy to understand.
      </span>
    </div>

    <div className="process-section__grid">
      {processSteps.map((step, index) => (
        <React.Fragment key={step.label}>
          <article className="process-card">
            <span className="process-card__icon">
              <img src={step.icon} alt={step.alt} loading="lazy" />
            </span>
            <p>{step.label}</p>
            <h3>{renderHighlightedText(step.title)}</h3>
            <span>{renderHighlightedText(step.description)}</span>
          </article>
          {index < processSteps.length - 1 ? (
            <span className="process-arrow" aria-hidden="true">
              <img src={processArrowIcon} alt="" />
            </span>
          ) : null}
        </React.Fragment>
      ))}
    </div>
  </section>
);

export default ProcessSection;
