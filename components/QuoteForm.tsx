"use client";

import { useState } from "react";
import {
  acceptedDrawingExt,
  maxUploadBytes,
  maxUploadFiles,
  quoteMaterials,
  quoteServices,
  site,
} from "@/lib/site";

const accept = acceptedDrawingExt.join(",");

type Status =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success"; reference: string; files: string[] }
  | { state: "error"; message: string };

export function QuoteForm() {
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const [fileNames, setFileNames] = useState<string[]>([]);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        body: data,
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        error?: string;
        reference?: string;
        files?: string[];
      };

      if (!response.ok || !payload.ok) {
        setStatus({
          state: "error",
          message: payload.error ?? "We could not submit the request. Try again.",
        });
        return;
      }

      form.reset();
      setFileNames([]);
      setStatus({
        state: "success",
        reference: payload.reference ?? "received",
        files: payload.files ?? [],
      });
    } catch {
      setStatus({
        state: "error",
        message: "Network error. Call the shop if this continues.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5 bg-white p-6 sm:p-8">
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Company" name="company" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-ink">Service</span>
          <select
            name="service"
            required
            defaultValue=""
            className="border border-ink/15 bg-cream px-3 py-3 text-ink outline-none focus:border-red"
          >
            <option value="" disabled>
              Select a service
            </option>
            {quoteServices.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
        <label className="grid gap-2 text-sm">
          <span className="font-medium text-ink">Material</span>
          <select
            name="material"
            required
            defaultValue=""
            className="border border-ink/15 bg-cream px-3 py-3 text-ink outline-none focus:border-red"
          >
            <option value="" disabled>
              Select a material
            </option>
            {quoteMaterials.map((material) => (
              <option key={material} value={material}>
                {material}
              </option>
            ))}
          </select>
        </label>
        <Field label="Quantity" name="qty" required placeholder="e.g. 25, 100, 1,000" />
        <Field label="Due date" name="dueDate" type="date" />
      </div>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink">Notes</span>
        <textarea
          name="notes"
          rows={5}
          placeholder="Critical dimensions, first article, finish, hardware, weld notes."
          className="border border-ink/15 bg-cream px-3 py-3 text-ink outline-none focus:border-red"
        />
      </label>

      <label className="grid gap-2 text-sm">
        <span className="font-medium text-ink">
          Upload drawings — STEP, IGES, DXF, DWG, or PDF
        </span>
        <input
          type="file"
          name="files"
          accept={accept}
          multiple
          onChange={(event) => {
            const files = Array.from(event.target.files ?? []);
            setFileNames(files.map((file) => file.name));
          }}
          className="border border-dashed border-ink/25 bg-cream px-3 py-6 text-ink file:mr-4 file:border-0 file:bg-red file:px-3 file:py-2 file:text-xs file:font-semibold file:tracking-wider file:text-white file:uppercase"
        />
        <span className="text-xs text-ink/55">
          Up to {maxUploadFiles} files, {Math.round(maxUploadBytes / (1024 * 1024))}{" "}
          MB each. Attach the drawing with this form.
        </span>
        {fileNames.length ? (
          <ul className="text-xs text-ink/70">
            {fileNames.map((name) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        ) : null}
      </label>

      <button
        type="submit"
        disabled={status.state === "submitting"}
        className="bg-red px-6 py-4 text-xs font-semibold tracking-[0.16em] text-white uppercase hover:bg-red-deep disabled:opacity-60"
      >
        {status.state === "submitting" ? "Sending request…" : "Submit quote request"}
      </button>

      {status.state === "success" ? (
        <div className="border border-ink/10 bg-cream p-4 text-sm text-ink">
          <p className="font-semibold">We have your request{status.files.length ? " and drawings" : ""}.</p>
          <p className="mt-2 text-ink/70">
            Reference {status.reference}. Our team will review the job and get
            back to you with a practical path to production. No follow-up email
            of the files is needed — they arrived with this request.
          </p>
          {status.files.length ? (
            <p className="mt-2 text-ink/70">Received: {status.files.join(", ")}</p>
          ) : null}
        </div>
      ) : null}

      {status.state === "error" ? (
        <p className="text-sm text-red">{status.message}</p>
      ) : null}

      <p className="text-xs text-ink/55">
        Prefer the phone?{" "}
        <a href={site.phoneHref} className="font-semibold text-red">
          {site.phoneDisplay}
        </a>
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <label className="grid gap-2 text-sm">
      <span className="font-medium text-ink">{label}</span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="border border-ink/15 bg-cream px-3 py-3 text-ink outline-none focus:border-red"
      />
    </label>
  );
}
