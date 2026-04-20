import * as React from "react";
import renderHighlightedText from "../brand-text";
import processArrowIcon from "../../images/process-arrow.svg";
import processEstimateIcon from "../../images/process-estimate.svg";
import processPhoneIcon from "../../images/process-phone.svg";
import processScheduleIcon from "../../images/process-schedule.svg";
import processWorkBeginsIcon from "../../images/process-work-begins.svg";

const processSteps = [
  {
    label: "Step 1",
    title: "Book Appointment",
    description:
      "Reach out by phone or online form, and our team will schedule a convenient time to learn about your fence, deck, or exterior project.",
    icon: processPhoneIcon,
    alt: "Phone icon",
  },
  {
    label: "Step 2",
    title: "On-Site Estimate",
    description:
      "We review your space, discuss materials and project goals, take measurements, and provide a clear estimate based on your needs.",
    icon: processEstimateIcon,
    alt: "Estimate icon",
  },
  {
    label: "Step 3",
    title: "Schedule Installation",
    description:
      "Once you approve the estimate, we confirm materials, timeline, and installation date so you know exactly what to expect.",
    icon: processScheduleIcon,
    alt: "Schedule icon",
  },
  {
    label: "Step 4",
    title: "Work Begins",
    description:
      "Our crew arrives prepared, completes the work with care, and follows up to make sure every detail is handled properly.",
    icon: processWorkBeginsIcon,
    alt: "Construction work icon",
  },
];

const ProcessSection = () => (
  <section className="process-section" aria-labelledby="process-title">
    <div className="process-section__header">
      <p>How It Works</p>
      <h2 id="process-title">Our Simple 4-Step Process</h2>
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
