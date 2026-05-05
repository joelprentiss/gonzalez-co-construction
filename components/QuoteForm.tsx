"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Roofing",
  "Interior Renovation",
  "Exterior Renovation",
  "Fencing",
  "Siding",
  "General Home Project",
  "Other",
];

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setSubmitted(true);
    form.reset();
  }

  return (
    <div className="rounded-lg bg-white p-5 shadow-soft sm:p-7">
      {submitted ? (
        <div
          className="rounded-lg border border-green-200 bg-green-50 p-5 text-green-950"
          role="status"
          aria-live="polite"
        >
          <h3 className="text-xl font-bold">Thanks.</h3>
          <p className="mt-2 text-sm leading-6">
            Your project request has been received. Gonzalez&Co will contact you
            soon.
          </p>
        </div>
      ) : null}

      <form className="mt-0 grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Name" id="name" required>
            <input id="name" name="name" autoComplete="name" required />
          </Field>
          <Field label="Phone" id="phone" required>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              required
            />
          </Field>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Email" id="email" required>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </Field>
          <Field label="City" id="city" required>
            <input id="city" name="city" autoComplete="address-level2" required />
          </Field>
        </div>

        <Field label="Project Type" id="projectType" required>
          <select id="projectType" name="projectType" required defaultValue="">
            <option value="" disabled>
              Select a project type
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Project Details" id="projectDetails" required>
          <textarea id="projectDetails" name="projectDetails" rows={5} required />
        </Field>

        <fieldset className="rounded-lg border border-stone-200 p-4">
          <legend className="px-1 text-sm font-bold text-charcoal">
            Preferred Contact Method
          </legend>
          <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-slatework">
            {["Phone", "Email", "Text"].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  className="h-4 w-4 accent-gold focus-ring"
                  type="radio"
                  name="contactMethod"
                  value={method}
                  required
                />
                {method}
              </label>
            ))}
          </div>
        </fieldset>

        <button
          type="submit"
          className="focus-ring mt-2 inline-flex min-h-12 items-center justify-center rounded-md bg-gold px-6 py-3 text-base font-extrabold text-charcoal shadow-sm transition hover:bg-[#d79b38]"
        >
          Request My Quote
        </button>
      </form>
    </div>
  );
}

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactElement;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-charcoal" htmlFor={id}>
      <span>
        {label}
        {required ? <span className="text-rust"> *</span> : null}
      </span>
      <span className="form-control">{children}</span>
    </label>
  );
}
