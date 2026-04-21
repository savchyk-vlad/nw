type LeadFormValue = null | number | string | undefined;

type LeadFormFields = Record<string, LeadFormValue>;

export const submitLeadForm = async (
  subject: string,
  fields: LeadFormFields,
) => {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fields, subject }),
  });

  if (!response.ok) {
    throw new Error("Lead form submission failed");
  }

  return response;
};
