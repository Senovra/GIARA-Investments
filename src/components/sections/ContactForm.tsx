"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/variants";
import Button from "@/components/ui/Button";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      await new Promise((resolve) => setTimeout(resolve, 900));
      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  // autofill-field class (defined in globals.css) overrides the browser's
  // forced white autofill background via a long-delay box-shadow trick,
  // and keeps text/caret colors matching the dark theme.
  const inputClasses =
    "autofill-field w-full border-b border-foreground/20 bg-transparent py-3 text-foreground placeholder:text-foreground-muted/60 focus:border-accent focus:outline-none transition-colors duration-300";

  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      onSubmit={handleSubmit}
      className="space-y-8"
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className={inputClasses}
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className={inputClasses}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">
          Company / Institution
        </label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className={inputClasses}
          placeholder="Optional"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs uppercase tracking-widest text-foreground-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
          placeholder="Tell us about your inquiry..."
        />
      </div>

      <Button type="submit" variant="primary" className="w-full md:w-auto">
        {status === "submitting" ? "Sending..." : "Request Consultation"}
      </Button>

      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="text-sm text-accent">
            Thank you — your message has been received. Our team will be in touch shortly.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">
            Something went wrong. Please try again or email us directly.
          </p>
        )}
      </div>
    </motion.form>
  );
}