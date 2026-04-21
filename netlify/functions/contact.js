const RESEND_API_URL = "https://api.resend.com/emails";
const SITE_NAME = "Northwood Renovation";
const SITE_URL = "https://northwoodrenovation.com";
const BUSINESS_EMAIL = "northwoodrenovation@gmail.com";
const DEFAULT_FROM_EMAIL = "Northwood Renovation <onboarding@resend.dev>";
const DEFAULT_TEMPLATE_ID = "new-inquiry";

const fieldLabels = {
  contact: "Contact",
  description: "Project Details",
  email: "Email",
  location: "ZIP / City",
  message: "Message",
  name: "Name",
  phone: "Phone",
  preferredTimeline: "Preferred Timeline",
  projectType: "Project Type",
  source: "Source",
  zipCode: "ZIP Code",
};

const json = (statusCode, body) => ({
  body: JSON.stringify(body),
  headers: {
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  },
  statusCode,
});

const escapeHtml = (value) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const normalizeField = ([key, value]) => {
  if (value === undefined || value === null) return null;

  const normalizedValue = String(value).trim();
  if (!normalizedValue) return null;

  return {
    label: fieldLabels[key] || key,
    value: normalizedValue,
  };
};

const getReplyTo = (fields) => {
  const email = fields.find((field) => field.label === "Email")?.value;
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return email;

  const contact = fields.find((field) => field.label === "Contact")?.value;
  if (contact && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) return contact;

  return undefined;
};

const getFieldValue = (fields, label) =>
  fields.find((field) => field.label === label)?.value || "";

const getEmailValue = (fields) => {
  const explicitEmail = getFieldValue(fields, "Email");
  if (explicitEmail) return explicitEmail;

  const contact = getFieldValue(fields, "Contact");
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact) ? contact : "";
};

const getPhoneValue = (fields) => {
  const explicitPhone = getFieldValue(fields, "Phone");
  if (explicitPhone) return explicitPhone;

  const contact = getFieldValue(fields, "Contact");
  return contact.replace(/\D/g, "").length >= 10 ? contact : "";
};

const truncateTemplateValue = (value) => value.slice(0, 2000);

const buildTemplateVariables = (subject, fields) => {
  const detailsText = fields
    .map((field) => `${field.label}: ${field.value}`)
    .join("\n");
  const detailsHtml = fields
    .map(
      (field) =>
        `<strong>${escapeHtml(field.label)}:</strong> ${escapeHtml(field.value)}`,
    )
    .join("<br />");

  return {
    email: truncateTemplateValue(getEmailValue(fields)),
    message: truncateTemplateValue(
      getFieldValue(fields, "Message") ||
        getFieldValue(fields, "Project Details") ||
        detailsText,
    ),
    name: truncateTemplateValue(getFieldValue(fields, "Name")),
    phone: truncateTemplateValue(getPhoneValue(fields)),
    service: truncateTemplateValue(getFieldValue(fields, "Project Type")),
    zip: truncateTemplateValue(
      getFieldValue(fields, "ZIP / City") || getFieldValue(fields, "ZIP Code"),
    ),
    CUSTOMER_CONTACT: truncateTemplateValue(getFieldValue(fields, "Contact")),
    CUSTOMER_EMAIL: truncateTemplateValue(getFieldValue(fields, "Email")),
    CUSTOMER_NAME: truncateTemplateValue(getFieldValue(fields, "Name")),
    CUSTOMER_PHONE: truncateTemplateValue(getFieldValue(fields, "Phone")),
    DETAILS_HTML: truncateTemplateValue(detailsHtml),
    DETAILS_TEXT: truncateTemplateValue(detailsText),
    INQUIRY_SUBJECT: truncateTemplateValue(subject),
    PREFERRED_TIMELINE: truncateTemplateValue(
      getFieldValue(fields, "Preferred Timeline"),
    ),
    PROJECT_DESCRIPTION: truncateTemplateValue(
      getFieldValue(fields, "Project Details"),
    ),
    PROJECT_LOCATION: truncateTemplateValue(getFieldValue(fields, "ZIP / City")),
    PROJECT_MESSAGE: truncateTemplateValue(getFieldValue(fields, "Message")),
    PROJECT_TYPE: truncateTemplateValue(getFieldValue(fields, "Project Type")),
    SOURCE: truncateTemplateValue(getFieldValue(fields, "Source")),
    WEBSITE_URL: SITE_URL,
    ZIP_CODE: truncateTemplateValue(getFieldValue(fields, "ZIP Code")),
  };
};

exports.handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return json(204, {});
  }

  if (event.httpMethod !== "POST") {
    return json(405, { message: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || BUSINESS_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL;
  const templateId = process.env.RESEND_TEMPLATE_ID || DEFAULT_TEMPLATE_ID;

  if (!apiKey) {
    return json(500, { message: "Email service is not configured" });
  }

  let payload;

  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return json(400, { message: "Invalid JSON body" });
  }

  const subject =
    typeof payload.subject === "string" && payload.subject.trim()
      ? payload.subject.trim()
      : `New lead from ${SITE_NAME}`;
  const fields = Object.entries(payload.fields || {})
    .map(normalizeField)
    .filter(Boolean);

  if (!fields.length) {
    return json(400, { message: "Missing form fields" });
  }

  const emailPayload = {
    from: fromEmail,
    reply_to: getReplyTo(fields),
    subject,
    template: {
      id: templateId,
      variables: buildTemplateVariables(subject, fields),
    },
    to: [toEmail],
  };

  const emailResponse = await fetch(RESEND_API_URL, {
    body: JSON.stringify(emailPayload),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!emailResponse.ok) {
    const errorText = await emailResponse.text();
    console.error("Resend email failed", errorText);
    return json(502, {
      message: "Email provider failed",
      providerStatus: emailResponse.status,
      providerResponse: errorText,
    });
  }

  return json(200, { ok: true });
};
