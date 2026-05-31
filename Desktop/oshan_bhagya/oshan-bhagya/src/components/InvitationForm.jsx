import React from "react";

export default function InvitationForm({ formUrl = "" }) {
  const isGoogleForm = formUrl.includes("docs.google.com/forms");
  const src = isGoogleForm
    ? formUrl.includes("embedded=true")
      ? formUrl
      : formUrl.replace(/\/viewform(\?.*)?$/, "/viewform?embedded=true")
    : formUrl;

  return (
    <section className="mx-auto max-w-4xl px-6 py-12 text-center text-white">
      <div className="rounded-2xl bg-gradient-to-r from-black/60 to-black/40 p-6 shadow-2xl">
        <h3 className="mb-2 text-sm uppercase tracking-widest text-yellow-300">
          Invitation Confirmation
        </h3>
        <p className="mb-6 text-lg font-medium text-white/90">
          Please confirm your attendance — enter your name below.
        </p>

        {isGoogleForm ? (
          <div className="mx-auto max-w-xs">
            <a
              href={formUrl}
              target="_blank"
              rel="noreferrer"
              className="mx-auto inline-flex w-full items-center justify-center gap-2 rounded-full bg-yellow-300 px-5 py-3 text-sm font-semibold text-black shadow-md hover:bg-yellow-400"
            >
              Confirmation Attendance
            </a>
            <p className="mt-3 text-xs text-white/60">
              The form will open in a new tab. If it doesn't, try opening it manually.
            </p>
          </div>
        ) : (
          <div className="mx-auto max-w-sm">
            <p className="mb-4 text-sm text-white/70">
              No Google Form URL provided. Replace the `formUrl` prop with your
              form's embed URL to show it here.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-yellow-300/10 px-4 py-2 text-sm font-semibold text-yellow-200 hover:bg-yellow-300/20"
            >
              Add your form URL
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
