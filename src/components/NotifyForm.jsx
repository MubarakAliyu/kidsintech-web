"use client";
/*
 * NotifyForm — email capture with client-side validation. There is NO fake
 * backend: on a valid submit it opens the user's mail client (mailto) with a
 * pre-filled message to the team, and shows a success state. Errors and
 * success are announced via aria-live. Swap to EmailJS later by wiring keys
 * (the package is already in the stack) — until then mailto is the honest path.
 *
 * Props: subject, toEmail (default site.email), buttonLabel, placeholder.
 */
import { useState } from "react";
import { site } from "@/data/site";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function NotifyForm({
  subject = "Notify me",
  toEmail = site.email,
  buttonLabel = "Notify me",
  placeholder = "you@email.com",
}) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | error | success

  const onSubmit = (e) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email.trim())) {
      setStatus("error");
      return;
    }
    const body = `Please add me to the ${subject} list. My email: ${email.trim()}`;
    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("success");
  };

  const invalid = status === "error";

  return (
    <form
      onSubmit={onSubmit}
      className="w-full max-w-md flex flex-col gap-2"
      noValidate
    >
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="notify-email" className="sr-only">
          Email address
        </label>
        <input
          id="notify-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status !== "idle") setStatus("idle");
          }}
          placeholder={placeholder}
          aria-invalid={invalid}
          aria-describedby="notify-msg"
          className={`flex-1 rounded-full bg-white px-5 py-3 text-maroon border ${invalid ? "border-brand-red" : "border-hairline"} focus-visible:outline-2 focus-visible:outline-brand-red`}
        />
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-red text-paper px-6 py-3 font-bold transition-all duration-150 hover:bg-ink active:scale-[0.98]"
        >
          {buttonLabel}
        </button>
      </div>
      <p id="notify-msg" aria-live="polite" className="min-h-5 text-sm">
        {invalid && (
          <span className="text-brand-red">
            Please enter a valid email address.
          </span>
        )}
        {status === "success" && (
          <span className="text-green-success">
            Thanks! Your email app will open — send the pre-filled note and
            we'll keep you posted.
          </span>
        )}
      </p>
    </form>
  );
}
