"use client";
import emailjs from "@emailjs/browser";
/*
 * ContactForm — name/email/phone/subject/message. Wires to EmailJS when keys
 * are present (NEXT_PUBLIC_EMAILJS_* in .env.local — NEVER committed); falls
 * back to a real mailto: when they're absent (e.g. dev), so it never fakes a
 * submit. Full client-side validation with inline errors (aria-describedby),
 * a loading button state, and react-toastify success/error toasts.
 */
import { useState } from "react";
import { toast } from "react-toastify";
import { site } from "@/data/site";
import { track } from "@/lib/track";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_READY = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please enter your name.";
  if (!v.email.trim()) e.email = "Please enter your email.";
  else if (!EMAIL_RE.test(v.email.trim()))
    e.email = "Please enter a valid email.";
  if (!v.subject.trim()) e.subject = "Please add a subject.";
  if (v.message.trim().length < 10)
    e.message = "Message should be at least 10 characters.";
  return e;
}

const inputBase =
  "w-full rounded-2xl bg-white px-4 py-3 text-maroon border transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-brand-red";

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k) => (e) => {
    setValues((v) => ({ ...v, [k]: e.target.value }));
    if (errors[k]) setErrors((prev) => ({ ...prev, [k]: undefined }));
  };

  const mailtoFallback = () => {
    const body = `Name: ${values.name}\nEmail: ${values.email}\nPhone: ${values.phone}\n\n${values.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(values.subject)}&body=${encodeURIComponent(body)}`;
    toast.info("Your email app is opening — send the message to reach us.");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const eMap = validate(values);
    setErrors(eMap);
    if (Object.keys(eMap).length > 0) return;

    track("contact_submit", { method: EMAILJS_READY ? "emailjs" : "mailto" });

    if (!EMAILJS_READY) {
      mailtoFallback();
      return;
    }

    setSubmitting(true);
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          phone: values.phone,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: PUBLIC_KEY },
      );
      toast.success("Thanks! Your message has been sent.");
      setValues(EMPTY);
    } catch {
      toast.error("Sorry, something went wrong. Please email us directly.");
      mailtoFallback();
    } finally {
      setSubmitting(false);
    }
  };

  const field = (
    k,
    label,
    { type = "text", required = false, as = "input", ...rest } = {},
  ) => {
    const Tag = as;
    const errId = `${k}-error`;
    return (
      <div className="flex flex-col gap-1">
        <label htmlFor={k} className="text-sm font-semibold text-maroon">
          {label} {required && <span className="text-brand-red">*</span>}
        </label>
        <Tag
          id={k}
          name={k}
          type={as === "input" ? type : undefined}
          value={values[k]}
          onChange={set(k)}
          aria-invalid={Boolean(errors[k])}
          aria-describedby={errors[k] ? errId : undefined}
          className={`${inputBase} ${errors[k] ? "border-brand-red" : "border-hairline"} ${as === "textarea" ? "min-h-32 resize-y" : ""}`}
          {...rest}
        />
        {errors[k] && (
          <span id={errId} className="text-sm text-brand-red">
            {errors[k]}
          </span>
        )}
      </div>
    );
  };

  return (
    <form onSubmit={onSubmit} noValidate className="w-full flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {field("name", "Name", { required: true, autoComplete: "name" })}
        {field("email", "Email", {
          type: "email",
          required: true,
          autoComplete: "email",
        })}
        {field("phone", "Phone", { type: "tel", autoComplete: "tel" })}
        {field("subject", "Subject", { required: true })}
      </div>
      {field("message", "Message", { required: true, as: "textarea" })}

      {!EMAILJS_READY && (
        <p className="text-xs text-ink/50">
          Submitting opens your email app. (Live sending activates once the team
          adds EmailJS keys.)
        </p>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red text-paper px-8 py-4 font-bold text-lg transition-all duration-150 hover:bg-ink active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
