const RESEND_API_URL = "https://api.resend.com/emails";
const SITE_NAME = "Northwood Renovation";
const SITE_URL = "https://northwoodrenovation.com";
const BUSINESS_EMAIL = "northwoodrenovation@gmail.com";
const DEFAULT_FROM_EMAIL = "Northwood Renovation <onboarding@resend.dev>";

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

const buildPlainText = (subject, fields) =>
  [
    subject,
    "",
    ...fields.map((field) => `${field.label}: ${field.value}`),
    "",
    `Website: ${SITE_URL}`,
  ].join("\n");

const buildHtml = (subject, fields) => `
  <div style="font-family:Arial,sans-serif;color:#1b1b1b;line-height:1.55">
    <h1 style="font-size:22px;margin:0 0 18px">${escapeHtml(subject)}</h1>
    <table style="border-collapse:collapse;width:100%;max-width:680px">
      <tbody>
        ${fields
          .map(
            (field) => `
              <tr>
                <th style="border:1px solid #d7d7cf;background:#e4e4de;padding:10px 12px;text-align:left;width:180px">
                  ${escapeHtml(field.label)}
                </th>
                <td style="border:1px solid #d7d7cf;padding:10px 12px">
                  ${escapeHtml(field.value).replace(/\n/g, "<br />")}
                </td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
    <p style="margin-top:18px;color:#595f39">Sent from ${escapeHtml(SITE_URL)}</p>
  </div>
`;

const getReplyTo = (fields) => {
  const email = fields.find((field) => field.label === "Email")?.value;
  if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return email;

  const contact = fields.find((field) => field.label === "Contact")?.value;
  if (contact && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) return contact;

  return undefined;
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
    html: buildHtml(subject, fields),
    reply_to: getReplyTo(fields),
    subject,
    text: buildPlainText(subject, fields),
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
